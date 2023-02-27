const express = require('express')
const router = express.Router()

router.use('/api/users', require('./UserRoutes'))

// Controller
const {
    register,
    login,
    getCurrentUser,
    update,
    getUserByid
} = require('../controllers/UserController');

// Middlewares
const validate = require('../middlewares/handleValidation')
const {
    userCreateValidation,
    loginValidation,
    userUpdateValidation
    } = require('../middlewares/userValidations')
const authGuard = require('../middlewares/authGuard');

// Router
router.post('/register', userCreateValidation(), validate, register)
router.post('/login', loginValidation(), validate, login)
router.get('/profile', authGuard, getCurrentUser)
router.put(
    "/",
    authGuard,
    userUpdateValidation(),
    validate,
    imageUpload.single("profileImage"),
    update
    );
router.get("/:id", getUserById);

module.exports = router;