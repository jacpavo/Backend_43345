import winston from "winston";

const devLogger = winston.createLogger({
  transports: [new winston.transports.Console({ level: "verbose" })],
});

const prodLogger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: "./error", level: "warn" }),
    new winston.transports.Console({ level: "http" }),
  ],
});

export const addLogger = (req, res, next) => {
  req.logger = process.env.ENVIRONMENT == "PRODUCTION" ? prodLogger : devLogger;
  req.logger.http(`${req.method} en ${req.url}`);
  next()
};