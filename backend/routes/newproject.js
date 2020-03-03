const router       = require('express').Router()
const {newprojrct} = require('../controllers/newproject')
const uploadCloud = require('../config/cloudinary');



// uploadCloud.single('photo'),
router.post('/', uploadCloud.single('newform'),newprojrct)
module.exports =router