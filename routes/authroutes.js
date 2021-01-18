const { Router } = require('express')

const router = Router()
const autController = require('../controllers/authController')

router.get('/signup', autController.signup_get)
router.post('/signup', autController.signup_post)
router.get('/login', autController.login_get)
router.post('/login', autController.signup_post)


module.exports = router