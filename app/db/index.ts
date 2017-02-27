import {fireBaseInit} from "./firebase";

class Database {
    db;

    connect() {
        var admin = fireBaseInit();
        this.db = admin.database();
    }

    set(ref, data, callback?) {
        var ref = this.db.ref(ref);
        ref.set(data, callback)
    }

    update(ref, data, callback?) {
        var ref = this.db.ref(ref);
        ref.update(data, callback);
    }

    remove(ref, callback?) {
        var ref = this.db.ref(ref);
        ref.set(null, callback);
    }

    /**
     * Read value
     * @param ref selector
     * @returns promise
     *      then: function(readValue)
     *      catch: function(errorReason)
     */
    read(ref) {
        var ref = this.db.ref(ref);
        return new Promise(function(resolve, reject) {
            ref.on("value", function(snapshot) {
                resolve(snapshot.val());
            }, function (errorObject) {
                reject("The read failed: " + errorObject.code);
            });
        });
    }

}

var database = new Database();

export {
    database
}