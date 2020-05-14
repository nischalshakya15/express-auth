import {config} from "./config/config";
import app from './app';
import logger from './config/logger';

const port = config.app.port;

app.listen(port, () => {
    logger.info(`Server started at port ${port}`);
});