const express = require('express')

const loginRoute = require('./loginRoute')
const userRoute = require('./userRoute')
const bookingRoute = require('./bookingRoute')
const sectionRoute = require('./sectionRoute')

const router = express.Router()

router.use('/login',loginRoute)

router.use('/user',userRoute)
router.use('/booking',bookingRoute)
router.use('/section',sectionRoute)


module.exports = router