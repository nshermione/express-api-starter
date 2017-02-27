import {router} from "../helper";
import {Logger} from "../logger";

var friends = router();

friends.get("/", function (req, res) {
    res.json({message: "friends"});
});

friends.get("/list", function (req, res) {
    Logger.debug("get list friends");
    res.json({message: "friends list"});
});

export default friends;

