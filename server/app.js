import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import edurecRoutes from './routes/edurec.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

dotenv.config();

const dirname = path.resolve();

const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

app.use('/edurec', edurecRoutes);

app.use(errorHandler);
app.use(notFoundHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running'));
