////////////////////////
// Setup - Import deps and create app object
////////////////////////
require("dotenv").config()
const express = require("express")
const { PORT, DATABASE_URL } = process.env
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")

//////////////////////
// Declare Middleware
//////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
//////////////////////
// Database Connection
//////////////////////
mongoose.connect(DATABASE_URL)
mongoose.connection
    .on("open", () => console.log("You are connected to MongoDB"))
    .on("close", () => console.log("You are disconnected from MongoDB"))
    .on("error", (error) => console.log(error))
///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show
app.get("/", (req, res) => {
    res.send("Please add --- to the end of your Url.")
})

app.get("/food", async (req, res) => {
    try {
        res.json( await Food.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

app.post("/food", async (req, res) => {
    try {
        res.json( await Food.create(req.body))
    } catch {
        res.status(400).json(error)
    }
})

app.delete("/food/:id", async (req, res) => {
    try {
        res.json( await Food.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

app.put("/food/:id", async (req, res) => {
    try {
        res.json( await Food.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => console.log(`out here at ----> ${PORT}`))