/**
 * Created by thinhth2 on 2/28/2017.
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username:  String,
    password: String,
    secret: String,
    join_date: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false }
});

let User = mongoose.model('User', userSchema );

export {
    User
}