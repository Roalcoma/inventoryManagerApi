import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import { productsRouter } from './routes/productsRoutes.js';
import { usersRouter } from './routes/usersRoutes.js';

export const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.use('/api/products', productsRouter)
app.use('/api/auth', usersRouter)

// Ruta por defecto
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});