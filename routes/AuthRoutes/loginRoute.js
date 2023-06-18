import express from 'express';

const loginRouter = express.Router();

loginRouter.get("/login",(req,res)=>{
    res.send("/login Route. User should be logging in");
});

export default loginRouter;