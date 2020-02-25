const express       = require('express')
const router        = express.Router()
const {authSignup}  =require('../controllers/authSignup')



router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post('/signup', authSignup, (req,res)=>{
  res.send(200).json('hoooooooooooooooooooooli')
})


module.exports =router