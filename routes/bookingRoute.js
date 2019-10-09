const express = require('express')

const { getBookingData, AddBookingData,getBookingDataWithId } = require('../controller/bookingController')
const {authenticationMiddleware} = require('./authenticationMiddleware')

const router = express.Router()

router.use(authenticationMiddleware)

router.get('/', getBookingData)
router.get('/:id',getBookingDataWithId)
router.put('/newbook', AddBookingData)

module.exports = router