import express from 'express';
import { signupService } from '../../services/user';

const signupRouter = express.Router();

signupRouter.post("/signup",(req,res)=>{
    signupService(req,res);
});

export default signupRouter;