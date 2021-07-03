const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type:String, required: true},
    dni: {type: Number},
    telephone: {type: Number},
    email: {type: String},
    content: {type: String},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Message',MessageSchema);