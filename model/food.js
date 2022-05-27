////////////////////////
// Setup - Import deps 
////////////////////////
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const foodSchema = new Schema(
    {
        name: String,
        PosName: String,
        image: String,
        price: Number,
    }, 
    { timestamps: true }
);

const Food = model("Food", foodSchema);

//////////////////////
// Export
//////////////////////
module.exports = Food;