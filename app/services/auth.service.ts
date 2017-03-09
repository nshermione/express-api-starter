import {User} from "../models/user.model";
import {SecureService} from "./secure.service";
import {config} from "../config/config";
const jwt = require('jsonwebtoken');

export class AuthService {

    verifyUser(req, res, next) {
        let token = req.body.token || req.query.token;
        if (token) {
            jwt.verify(token, config.secret, function (err, user) {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'failed to authenticate token'
                    });
                } else {
                    req.username = user.username;
                    next();
                }
            });
        } else {
            res.status(403).json({
                success: false,
                error: "no token provided"
            });
        }
    }

    login(username, password) {
        return new Promise<any>((resolve) => {
            User.findOne(
                {username: username},
                'username password secret',
                (err, user) => {
                    if (user) {
                        let secureService = new SecureService();
                        let storePass = secureService.decrypt(user.password, user.secret);
                        let requestPass = secureService.decrypt(password, user.secret);
                        let token = jwt.sign(
                            {
                                username: user.username
                            },
                            config.secret,
                            {
                                expiresIn: config.tokenExpires
                            });
                        resolve({
                            success: storePass === requestPass,
                            token: token
                        });
                    }
                    resolve({success: false});
                });
        });
    }

    logout() {

    }
}


