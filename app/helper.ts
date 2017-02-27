/**
 * Created by thinhth2 on 2/27/2017.
 */
import  * as express from 'express';


function router() {
    return express["Router"]();
}

function loadRouters(routers) {
    var parentRouter = express["Router"]();

    for (let routerPattern in routers) {
        if (!routers.hasOwnProperty(routerPattern)) continue;
        let childRouter = routers[routerPattern];
        parentRouter.use(routerPattern, childRouter);
    }

    return parentRouter;
}

function rootRouter(callback) {
    var rootRouter = router();
    rootRouter.get("/", callback);
    return rootRouter;
}

export {
    router,
    loadRouters,
    rootRouter
}