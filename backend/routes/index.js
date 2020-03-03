const express = require('express');
const router  = express.Router();
const {gethome}= require('../controllers/gethome')

/* GET home page */
router.get('/',gethome);
module.exports = router;
