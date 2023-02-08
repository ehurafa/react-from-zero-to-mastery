const express = require('express')
const router = express.Router()

router.use('/api/users', require('./UserRoutes'))

// Controller
const { register } = require('../controllers/UserController')

// Router
router.post('/register', register)

module.exports = router