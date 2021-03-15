import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
const app = express();
import routes from './routes';
import errorHandler from './errors/handler';
import cors from 'cors';
const porta = 3333;

import path from 'path';

import './database/connection';

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);


app.listen(process.env.PORT || 3333);