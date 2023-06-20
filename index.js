import express from 'express';
import userAuthRouter from './routes/userAuthRouter';
import connection from './middlewares/db';
import auth from './middlewares/auth';
const app = express();

app.use((req,res,next)=>{
    req.db = connection;
    next();
});

app.use(express.json());

app.use(userAuthRouter);

app.use(auth);

app.get("/",(req,res,next) => {
    console.log("Entered to /");
    res.send("Authenticated");
})

app.listen(3000);