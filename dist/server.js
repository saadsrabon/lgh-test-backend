"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const logger_1 = require("./shared/logger");
let server;
/* This code is setting up a listener for uncaught exception. It's a synchronous process */
process.on('uncaughtException', error => {
    logger_1.errorLogger.error(error);
    process.exit(1);
});
/* This code is setting up a listener for unhandled promise rejections. It's a asynchronous process */
process.on('unhandledRejection', error => {
    if (server) {
        server.close(() => {
            logger_1.errorLogger.error(error);
            process.exit(1);
        });
    }
});
/* `process.on('SIGTERM', () => {...})` sets up a listener for the SIGTERM signal, which is a signal
sent to a process to request its termination. When this signal is received, the code inside the
listener function is executed. In this case, if the `server` variable is defined (meaning the server
is running), it is closed and a success message is logged. This is a way to gracefully shut down the
server when the process is terminated, such as when the application is deployed to a cloud platform
and needs to be scaled down or updated. */
process.on('SIGTERM', () => {
    if (server) {
        server.close(() => {
            logger_1.successLogger.info('Process terminated');
        });
    }
});
function databaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.database_url);
            // successLogger.info('Database connected successfully')
            server = app_1.default.listen(config_1.default.port, () => {
                logger_1.successLogger.info(`Server is listening on port ${config_1.default.port}`);
            });
        }
        catch (error) {
            logger_1.errorLogger.error('Error while connecting database: ', error);
        }
    });
}
databaseConnection();
