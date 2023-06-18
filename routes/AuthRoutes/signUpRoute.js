import express from 'express';

const signupRouter = express.Router();

signupRouter.get("/signup",(req,res)=>{
    res.send("/signup Route. User should sign up");
});

export default signupRouter;