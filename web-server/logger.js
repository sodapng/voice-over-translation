import winston from "winston";
import config from "config";

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} | ${level}: ${message}`;
});

const getTransport = async () => {
  if (config.get("saveLogs") === true) {
    return [
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "all.log" }),
      new winston.transports.Console(),
    ];
  } else {
    return [new winston.transports.Console()];
  }
};

const getLogsLevel = async () => {
  return config.get("debugLogs") === true ? "debug" : "info";
};

const logger = winston.createLogger({
  level: await getLogsLevel(),
  exitOnError: false,
  format: combine(
    winston.format.colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    myFormat
  ),
  defaultMeta: { service: "translation" },
  transports: await getTransport(),
});

export default logger;
