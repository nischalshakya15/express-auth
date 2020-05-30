import express, { Request } from 'express';
import routes from './routes';
import { config } from './config/config';
import { GlobalExceptionHandler } from './exceptions/GlobalExceptionHandler';
import * as HttpStatus from 'http-status-codes';
import { globalExceptionHandlerMiddleware } from './middlewares/GlobalExceptionHandlerMiddleware';
import { swaggerDocument } from './swagger';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(config.app.basePath || '/', routes);

app.all('*', (req: Request) => {
  throw new GlobalExceptionHandler(HttpStatus.NOT_FOUND, `Can't find ${req.originalUrl} on this server.`);
});

app.use(globalExceptionHandlerMiddleware);

export default app;
