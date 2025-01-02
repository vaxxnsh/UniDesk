import {z} from 'zod'


export const signUpSchema = z.object({
    name : z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).min(2,"Must be 2 or more characters long").max(30,"Must be 30 or fewer characters long"),

    email : z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }).email({message : "Invalid Email String!"}),

    password : z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    }).min(6,"Must be 6 or more characters long").max(15,"Must be 15 or fewer characters long")
});

export const signinSchema = signUpSchema.omit({password : true})