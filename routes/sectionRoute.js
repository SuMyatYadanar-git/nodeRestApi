const express = require('express')

const { getSection,getFreeSection } = require('../controller/sectionController')
const { authenticationMiddleware } = require('./authenticationMiddleware')

const router = express.Router()

router.use(authenticationMiddleware)

router.get('/', getSection)
router.get('/:ground_id/:date',getFreeSection)

module.exports = router


