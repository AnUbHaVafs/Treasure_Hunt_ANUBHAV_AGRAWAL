// import { isEmail } from 'validator';
const { isEmail } = require('validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email']
    },
    uniqueId: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false,
    },
    usertype: {
        type: String,
        enum: ['user', 'admin'],
        required: false,
    },
    registerTime: {
        type: String,
        required: false
    },
    level: {
        type: Number,
        required: false
    },
    loginTime: {
        type: String,
        required: false
    },
    firstClueTime: {
        type: String,
        required: false
    },
    firstClueAccuracy: {
        type: Number,
        required: false
    },
    secondClueTime: {
        type: String,
        required: false
    },
    secondClueAccuracy: {
        type: Number,
        required: false
    },
    thirdClueTime: {
        type: String,
        required: false
    },
    thirdClueAccuracy: {
        type: Number,
        required: false
    },
    fourthClueTime: {
        type: String,
        required: false
    },
    fourthClueAccuracy: {
        type: Number,
        required: false
    },
    fifthClueTime: {
        type: String,
        required: false
    },
    fifthClueAccuracy: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('user', UserSchema);
module.exports = User;