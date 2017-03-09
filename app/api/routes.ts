import {userRouter} from "./users";
import {authRouter} from "./auth";

export default {
    "/auth": authRouter,
    "/users": userRouter
}