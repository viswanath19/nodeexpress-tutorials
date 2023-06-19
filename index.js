import express from 'express';
import userAuthRouter from './routes/userAuthRouter';
import connection from './middlewares/db';
const app = express();

app.use((req,res,next)=>{
    req.db = connection;
    next();
});

app.use(express.json());

app.use(userAuthRouter);

app.listen(3000);