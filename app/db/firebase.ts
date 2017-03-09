import {IDatabase} from "./interfaces";

let admin:any = require("firebase-admin");
let serviceAccount = require("../config/helloworld-79707-firebase-adminsdk-56qrc-78f5450c72.json");

function fireBaseInit() {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://helloworld-79707.firebaseio.com"
    });

    return admin;
}

export class FireBaseDatabase implements IDatabase {
    db;

    connect() {
        var admin = fireBaseInit();
        this.db = admin.database();
    }

    set(refPath, data, callback?) {
        var ref = this.db.ref(refPath);
        ref.set(data, callback)
    }

    update(refPath, data, callback?) {
        var ref = this.db.ref(refPath);
        ref.update(data, callback);
    }

    remove(refPath, callback?) {
        var ref = this.db.ref(refPath);
        ref.set(null, callback);
    }

    read(refPath) {
        var ref = this.db.ref(refPath);
        return new Promise((resolve, reject) => {
            ref.on("value", function(snapshot) {
                resolve(snapshot.val());
            }, function (errorObject) {
                reject("The read failed: " + errorObject.code);
            });
        });
    }

}