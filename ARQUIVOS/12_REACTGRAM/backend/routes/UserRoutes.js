const express = require('express')
const router = express.Router()

router.use('/api/users', require('./UserRoutes'))

// Controller
const { register, login } = require('../controllers/UserController')

// Middlewares
const validate = require('../middlewares/handleValidation')
const { userCreateValidation, loginValidation } = require('../middlewares/userValidations')

// Router
router.post('/register', userCreateValidation(), validate, register)
router.post('/login', loginValidation(), validate, login)

module.exports = router