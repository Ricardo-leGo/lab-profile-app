const express = require('express');
const router  = express.Router();
const {deleteELement}= require('../controllers/delete')

/* GET home page */
router.post('/',deleteELement);
module.exports = router;
