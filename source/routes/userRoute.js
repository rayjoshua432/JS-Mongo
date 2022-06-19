// Import the dependencies
const express = require('express')
const router = express.Router()

// Import services
const CreateService = require('../services/create')
const RetrieveService = require('../services/retrieve')
const UpdateService = require('../services/update')
const DeleteService = require('../services/delete')

// Create endpoints
router.post('/create', async(req, res) => {
    const { username, password } = req.body

    const result = await CreateService(username, password)

    if (result) {
        res.status(200).send({
            status: result,
            message: 'Successfully created'
        })
    } else {
        res.status(500).send({
            status: result,
            message: 'Not created'
        })
    }
})

router.post('/retrieve', async(req, res) => {
    const result = await RetrieveService()

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(500).send({
            status: result,
            message: 'Not retrived'
        })
    }
})

router.post('/update', async(req, res) => {
    const { _id, obj } = req.body

    const result = await UpdateService(_id, obj)

    if (result) {
        res.status(200).send({
            status: result,
            message: 'Successfully updated'
        })
    } else {
        res.status(500).send({
            status: result,
            message: 'Not updated'
        })
    }
})

router.post('/delete', async(req, res) => {
    const { _id } = req.body

    const result = await DeleteService(_id)

    if (result) {
        res.status(200).send({
            status: result,
            message: 'Successfully deleted'
        })
    } else {
        res.status(500).send({
            status: result,
            message: 'Not deleted'
        })
    }
})

module.exports = router