import {FireBaseDatabase} from "./firebase";
import {MongoDatabase} from "./mongo";

// let database = new FireBaseDatabase();
let database = new MongoDatabase();

export {
    database
}