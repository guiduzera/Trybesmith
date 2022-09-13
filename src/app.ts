import express from 'express';
import 'express-async-errors';
import routes from './routes';
import errorMid from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorMid);

export default app;
