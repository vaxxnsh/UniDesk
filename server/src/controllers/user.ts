import { Request,Response } from 'express';
import DB from '../constants/prisma';
import { signUpSchema,signinSchema } from '../validations/user';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';
import bcrypt from 'bcryptjs';





export const handleSignUp = async (req : Request,res : Response) : Promise<void> => {
    const valid = signUpSchema.safeParse(req.body);

    if (!valid.success) {
        res.status(400).json({
            message : "Invalid body for the request",
            error : valid.error.errors[0]
        })
        return;
    }

    try {
        const user = await DB.user.findFirst({
            where : {
                email : req.body.email, 
            }
        });
    
        if(user) {
            res.status(400).json({
                message : "User already present"
            })
            return;
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
        const newUser = await DB.user.create({
            data : {
                name : req.body.name,
                email : req.body.email,
                password : hashedPassword
            }
        })
    
        const token = jwt.sign({
            name : newUser.name,
            email : newUser.email,
        },JWT_SECRET);

        res.cookie('Auth',token);

        res.status(200).json({
            user : {id : newUser.id, name : newUser.name, email : newUser.email},
            token : token,
            message : "User register successfully"
        })
    }
    catch(err) {
        let returnMessage = {
            message : "Something went wrong",
        }
        if (err instanceof Error) {
            returnMessage.message = err.message
        }
        else if (typeof err === 'string') {
            returnMessage.message = err
        }
            
        res.json(returnMessage);
    }
}

export const handleSignIn = async (req : Request,res : Response) : Promise<void> => {
    const valid = signinSchema.safeParse(req.body);

    if (!valid.success) {
        res.status(400).json({
            message : "Invalid body for the request",
            error : valid.error.errors[0]
        })
        return;
    }

    try {
        const user = await DB.user.findFirst({
            where : {
                email : req.body.email, 
            }
        })
    
        if(!user) {
            res.status(400).json({
                message : "User not found"
            })
            return;
        }
    
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            res.status(400).json({ message: 'Invalid email or password.' });
            return;
        }
    
        const token = jwt.sign({
            name : user.name,
            email : user.email,
        },JWT_SECRET);

        res.cookie('Auth',token);

        res.status(200).json({
            user : {id : user.id, name : user.name, email : user.email},
            token : token,
            message : "User Logged in successfully"
        })
    }
    catch(err) {
        let returnMessage = {
            message : "Something went wrong",
        }
        if (err instanceof Error) {
            returnMessage.message = err.message
        }
        else if (typeof err === 'string') {
            returnMessage.message = err
        }
            
        res.json(returnMessage);
    }
}