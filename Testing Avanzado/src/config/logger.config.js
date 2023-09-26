import winston from "winston";
import config from "./config.js";

const customLevelOptions = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    http: 4,
    debug: 5,
  },
  colors: {
    fatal: "red",
    error: "magenta",
    warning: "yellow",
    info: "blue",
    debug: "white",
  }
}

const devLogger = winston.createLogger({
  levels: customLevelOptions.levels,
  transports: [
    new winston.transports.Console({ 
      level: "debug",
      format: winston.format.combine(
        winston.format.colorize({colors: customLevelOptions.colors}),
        winston.format.simple()
      )
})
],
});

const prodLogger = winston.createLogger({
  levels: customLevelOptions.levels,
  transports: [
    new winston.transports.File({ 
      filename: "./errors.log", 
      level: "warning",
      format: winston.format.simple()
    }),
    new winston.transports.Console({ 
      level: "info",
      format: winston.format.combine(
        winston.format.colorize({colors: customLevelOptions.colors}),
        winston.format.simple()
      )
})
  ],
});

export const addLogger = (req, res, next) => {
  if (config.ENVIRONMENT){
    console.log("produccion")
  }
  req.logger = config.ENVIRONMENT == "PRODUCTION" ? prodLogger : devLogger;
  req.logger.http(`${req.method} en ${req.url}`);
  next()
};