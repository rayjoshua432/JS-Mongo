// Import the database connection
const db = require('../database/conn')

// Function to update user
module.exports = async(_id, obj) => {
    try {
        await db.update({ _id }, { $set: obj })
        return true
    } catch (err) {
        console.error(err)
        return false

    }
}