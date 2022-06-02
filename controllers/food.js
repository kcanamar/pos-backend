////////////////////////
// Setup - Import deps
////////////////////////
const Food = require("../models/food")
///////////////////////
// Exports
///////////////////////

module.exports = {
    create,
    index,
    update,
    delete: deleteItem,
};
///////////////////////
// Declare Routes 
///////////////////////
// Index 
async function index(req, res) {
    try {
        res.json( await Food.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
}

// Create
async function create(req, res) {
    try {
        res.json( await Food.create(req.body))
    } catch(error){
        res.status(400).json(error)
    }
}

// Update
async function update(req, res) {
    try {
        res.json( await Food.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
}

// Delete
async function deleteItem(req, res) {
    try {
        res.json( await Food.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}