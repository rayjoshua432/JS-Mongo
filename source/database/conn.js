// Import mongooose
const mongoose = require('mongoose')

// Create mongoose Schema objects
const Schema = mongoose.Schema

// Function to create Schema objects
const UserSchema = new Schema({
    // objects
    username: {
        // attr
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    }
})

// Export mongoose Schema model
module.exports = mongoose.model('users', UserSchema)