const express = require('express')
const {getUser,getUserWithId,
    deleteUser,putNewUser} = require('../controller/userController')
const {authenticationMiddleware} = require('./authenticationMiddleware')

const router = express.Router()

router.use(authenticationMiddleware)


router.get('/',getUser)
router.get('/:id',getUserWithId)
router.put('/newuser',putNewUser)
router.delete('/:id',deleteUser)

module.exports = router 