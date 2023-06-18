import express from 'express';
import router from './routes';
import connection from './middlewares/db';
const app = express();

app.use(()=>connection);

app.use(router);

app.listen(3000);