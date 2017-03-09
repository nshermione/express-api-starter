import {router} from "../helper";
import {AuthService} from "../services/auth.service";
import * as bodyParser from "body-parser";
var jsonParser = bodyParser.json();

let authRouter = router();

authRouter.post("/login", jsonParser, function (req, res) {
    let auth = new AuthService();
    auth.login(req.body.username, req.body.password)
        .then(result => {
            if (result.success) {
                res.json({
                    success: true,
                    token: result.token
                });
            } else {
                res.json({
                    success: false,
                    error: "invalid authorization"
                });
            }
        });
});

export {
    authRouter
};

