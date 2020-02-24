const express       = require('express')
const router        = express.Router()
const {authSignup}  =require('../controllers/authSignup')

router.post('/signup', authSignup)


module.exports =router