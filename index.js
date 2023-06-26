import express from 'express';
import userAuthRouter from './routes/userAuthRouter';
import userInfoRouter from './routes/userInfoRouter';
import connection from './middlewares/db';
import auth from './middlewares/auth';
import dotenv from 'dotenv';
const app = express();

app.use((req,res,next) => {
    dotenv.config();
    next();
});

app.use((req,res,next)=>{
    req.db = connection;
    next();
});

app.use(express.json());

app.use(userAuthRouter);

app.use(auth);

app.use(userInfoRouter);

app.listen(3000);