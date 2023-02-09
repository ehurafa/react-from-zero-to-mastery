const express = require('express')
const router = express.Router()

router.use('/api/users', require('./UserRoutes'))

// Controller
const { register } = require('../controllers/UserController')

// Middlewares
const validate = require('../middlewares/handleValidation')

// Router
router.post('/register', validate, register)

module.exports = router