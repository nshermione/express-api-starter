/**
 * Created by thinhth2 on 2/27/2017.
 */
import friendRouter from "./friends";
import {rootRouter} from "../helper";

var router = rootRouter(function (req, res) {
    res.json("Welcome to Restful API service");
});

export default {
    "/": router,
    "/friends": friendRouter
}