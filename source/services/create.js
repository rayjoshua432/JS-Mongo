// Import the database connection
const db = require('../database/conn')

module.exports = async(username, password) => {
    try {
        await db.create({
            username,
            password
        })
        return true
    } catch (err) {
        console.error(err)
        return false

    }
}