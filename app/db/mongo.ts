import {IDatabase} from "./interfaces";
import {config} from "../config/config";
const mongoose    = require('mongoose');

export class MongoDatabase implements IDatabase {
    connect() {
        mongoose.connect(config.dbPath); // connect to database
    }

}