import express from 'express';
import * as AuthRouter from './AuthRoutes/index';

const userAuthRouter = express.Router();

userAuthRouter.get("/login",AuthRouter.loginRouter);

userAuthRouter.post("/signup",AuthRouter.signupRouter);

export default userAuthRouter;