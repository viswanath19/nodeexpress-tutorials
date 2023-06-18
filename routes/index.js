import express from 'express';
import * as AuthRouter from './AuthRoutes/index';

const router = express.Router();

router.get("/login",AuthRouter.loginRouter);

router.get("/signup",AuthRouter.signupRouter);

export default router;