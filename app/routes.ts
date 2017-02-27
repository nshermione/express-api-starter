import apiRouters from "./api/routes";
import {loadRouters} from "./helper";

var apiRouter = loadRouters(apiRouters);

export default {
    "/api": apiRouter
}