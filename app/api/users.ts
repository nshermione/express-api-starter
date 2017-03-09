import {router} from "../helper";
import {AuthService} from "../services/auth.service";
import bodyParser = require("body-parser");
import {UserService} from "../services/user.service";

let jsonParse = bodyParser.json();
let authService = new AuthService();
let userRouter = router();

userRouter.get("/me", [jsonParse, authService.verifyUser], (req, res) => {
    let userService = new UserService();
    userService
        .me(req)
        .then(user => {
            if (user) {
                res.json({
                    username: user.username,
                    join_date: user.join_date
                });
            }

            res.json({
                success: false,
                error: "can not find user"
            })
        });
});


export {
    userRouter
};

