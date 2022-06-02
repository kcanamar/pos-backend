////////////////////////
// Setup - Import deps and create app object
////////////////////////
require("dotenv").config()
require("./config/db")
const express = require("express")
const Middleware = require('./middleware/mid')
const PosRouter = require('./routes/food')
const app = express()
const { PORT, DATABASE_URL } = process.env
//////////////////////
// Declare Middleware
//////////////////////
Middleware(app)
///////////////////////
// Declare Routes and Routers 
///////////////////////
app.use(PosRouter)
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => console.log(`out here at ----> ${PORT}`))