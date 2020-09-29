const router = require('express').Router()

router.use('/api', require('./characterRoutes.js'))
router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./noteRoutes.js'))

module.exports = router
