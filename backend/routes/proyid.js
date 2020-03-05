const router       = require('express').Router()
const {getproyid,postproyid} = require('../controllers/proyid.js')
router.post('/',postproyid)
router.get('/', getproyid)
module.exports =router