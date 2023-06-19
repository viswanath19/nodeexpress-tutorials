import express from 'express';
import { loginService } from '../../services';
const loginRouter = express.Router();

loginRouter.get("/login",(req,res)=>{
    console.log("Entered to login Router");
    loginService(req,res);
});

export default loginRouter;