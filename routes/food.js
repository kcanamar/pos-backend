////////////////////////
// Setup - Import deps
////////////////////////
const express = require('express')
const router = express.Router()
const foodCtrl = require('../controllers/food')
///////////////////////
// Declare Routes and Routers 
///////////////////////

router.get("/", (req, res) => {
    res.send("Please add 'food' to the end of your Url.")
})
router.post("/food", foodCtrl.create)
router.get("/food", foodCtrl.index)
router.put("/food/:id", foodCtrl.update)
router.delete("/food/:id", foodCtrl.delete)
///////////////////////
// Exports
///////////////////////
module.exports = router