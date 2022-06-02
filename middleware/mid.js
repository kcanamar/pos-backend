////////////////////////
// Setup - Import deps
////////////////////////
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
///////////////////////////
// Export
///////////////////////////
module.exports = function(app) {
    app.use(express.json())
    app.use(morgan('dev'))
    app.use(cors())
}