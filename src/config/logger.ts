import {createLogger, format, transports} from 'winston';

const logger = createLogger({
    level: 'info',
    transports: [
        new transports.Console({
            format: format.combine(format.colorize(), format.simple()),
            level: 'info'
        }),
        new transports.File({filename: './error.log', level: 'error'}),
        new transports.File({filename: './info.log', level: 'info'}),
    ],
    exitOnError: false,
});

export default logger;