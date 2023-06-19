import express from 'express';
import router from './routes';
import connection from './middlewares/db';
const app = express();

app.use((req,res,next)=>{
    req.db = connection;
    next();
});

app.use(express.json());

app.use(router);

app.listen(3000);