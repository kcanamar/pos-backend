////////////////////////
// Setup - Import deps
////////////////////////
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        admin: Boolean
    }
);

const User = model("User", userSchema)
///////////////////////
// Exports
///////////////////////
module.exports = User