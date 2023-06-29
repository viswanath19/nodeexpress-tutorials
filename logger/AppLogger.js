const winston = require('winston');
export const AppLogger = () => {
    return winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [new winston.transports.Console()],
    });
}