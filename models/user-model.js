const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    venderId: String,
    picture: String
})

const User = mongoose.model('user',userSchema);

module.exports = User;
