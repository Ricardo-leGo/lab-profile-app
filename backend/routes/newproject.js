const router       = require('express').Router()
const uploadCloud = require('../config/cloudinary');
const {newprojrct} = require('../controllers/newproject')



// uploadCloud.single('photo'),
router.post('/', uploadCloud.single('file'),newprojrct)
module.exports =router