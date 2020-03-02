const router       = require('express').Router()
const {newprojrct} = require('../controllers/newproject')


router.post('/', newprojrct)
module.exports =router