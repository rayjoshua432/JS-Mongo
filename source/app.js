// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Port & Middlewares
const port = 8888

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Connect to the MongoDB server
const config = 'mongodb://127.0.0.1:27017/sample'

mongoose.connect(`${config}`)

// Check port connection
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})