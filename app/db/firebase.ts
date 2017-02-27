/**
 * Created by thinhth2 on 2/27/2017.
 */

var admin:any = require("firebase-admin");
var serviceAccount = require("../config/helloworld-79707-firebase-adminsdk-56qrc-78f5450c72.json");

function fireBaseInit() {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://helloworld-79707.firebaseio.com"
    });

    return admin;
}


export {
    fireBaseInit
}