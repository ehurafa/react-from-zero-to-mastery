const express = require('express')
const router = express.Router()

router.use('/api/users', require('./UserRoutes'))

// Controller
const { register } = require('../controllers/UserController')

// Middlewares
const validate = require('../middlewares/handleValidation')
const { userCreateValidation } = require('../middlewares/userValidations')

// Router
router.post('/register', userCreateValidation(), validate, register)

module.exports = router