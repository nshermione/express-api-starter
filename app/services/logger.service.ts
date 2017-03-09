/**
 * Created by thinhth2 on 2/24/2017.
 */
import winston = require('winston');

const log = winston.log;

var LogLevel = {
    DEBUG: "debug",
    INFO: "info",
    ERROR: "error",
    VERBOSE: "verbose",
    WARN: "warn",
};

class Logger {

    static setLogLevel(level) {
        winston.level = level;
    }

    static debug(...args: any[]) {
        log(LogLevel.DEBUG, ...args);
    }

    static info(...args: any[]) {
        log(LogLevel.INFO, ...args);
    }

    static error(...args: any[]) {
        log(LogLevel.ERROR, ...args);
    }

    static verbose(...args: any[]) {
        log(LogLevel.VERBOSE, ...args);
    }

    static warn(...args: any[]) {
        log(LogLevel.WARN, ...args);
    }
}

export {
    Logger,
    LogLevel
}