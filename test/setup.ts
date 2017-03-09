/**
 * Run this file to setup test data
 */
import {SecureService} from "../app/services/secure.service";
import {User} from "../app/models/user.model";
import {database} from "../app/db/index";

let secureService = new SecureService();
database.connect();

let secret = secureService.generateSecret();
let pwd = secureService.encrypt("123456", secret);

// create a sample user
let nick = new User({
    username: 'ns.hermione',
    password: pwd,
    secret: secret
});

// save the sample user
nick.save(function (err) {
    if (err) throw err;

    console.log('User saved successfully');
});
