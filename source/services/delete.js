// Import the database connection
const db = require('../database/conn')

// Function to delete user
module.exports = async(_id) => {
    try {
        await db.deleteOne({ _id })
        return true
    } catch (err) {
        console.error(err)
        return false

    }
}