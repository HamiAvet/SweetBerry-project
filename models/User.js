const { Schema, model} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phonenumber: {type: String, required: true},
    address: {type: String, required: true},
})

module.exports = model('User', schema)