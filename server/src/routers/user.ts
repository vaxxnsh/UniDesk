import { Router } from "express";
import { handleSignIn, handleSignUp } from "../controllers/user";

const userRouter = Router();


userRouter.post('/register',handleSignUp);
userRouter.post('/login',handleSignIn);

export default userRouter;