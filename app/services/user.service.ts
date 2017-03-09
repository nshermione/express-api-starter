import {User} from "../models/user.model";

export class UserService {
    me(req) {
        return new Promise(resolve => {
            User.findOne(
                {username: req.username},
                'username join_date',
                (err, user) => {
                    if (user) {
                        resolve(user);
                    }

                    setTimeout(() => {
                        resolve(null)
                    }, 5000);
                });
        });

    }
}