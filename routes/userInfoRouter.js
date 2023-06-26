import express from 'express';
import * as UserInfoRouter from './UserRoutes';

const userInfoRouter = express.Router();

userInfoRouter.get("/userDetails",UserInfoRouter.userDetails);

export default userInfoRouter;