// Import the database connection
const db = require('../database/conn')

// Function to retrieve user
module.exports = async() => {
    try {
        const result = await db.find()

        return result
    } catch (err) {
        console.error(err)
        return []

    }
}