"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Run this file to setup test data
 */
var secure_service_1 = require("./../app/services/secure.service.ts");
var user_model_1 = require("./../app/models/user.model.ts");
var index_1 = require("./../app/db/index");
var secureService = new secure_service_1.SecureService();
index_1.database.connect();
var secret = secureService.generateSecret();
var pwd = secureService.encrypt("123456", secret);
// create a sample user
var nick = new user_model_1.User({
    username: 'ns.hermione',
    password: pwd,
    secret: secret
});
// save the sample user
nick.save(function (err) {
    if (err)
        throw err;
    console.log('User saved successfully');
});
//# sourceMappingURL=setup.js.map