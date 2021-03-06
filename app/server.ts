/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/@types/express/index.d.ts" />

import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from 'cors';
import routers from "./routes";
import {Logger, LogLevel} from "./services/logger.service";
import {loadRouters} from "./helper";
import {database} from "./db/index";

/**
 * The server.
 *
 * @class Server
 */
export class Server {

    public app;


    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        Logger.setLogLevel(process.env.logLevel || LogLevel.DEBUG);
        return new Server();
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        //create expressjs application
        this.app = express();

        //configure application
        this.config();

        this.database();

        //add routes
        this.routes();
    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

    }

    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    public routes() {
        var port = process.env.PORT || 8080;        // set our port
        var rootRouter = loadRouters(routers);
        this.app.use("/", rootRouter);
        this.app.listen(port);
        Logger.info('Server is listening on port: ' + port);
    }

    private database() {
        database.connect();
    }
}

Server.bootstrap();