const express       = require('express')
const router        = express.Router()
const {authSignup, authLogin}  =require('../controllers/authSignup')



router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post('/signup', authSignup)


router.post('/login',authLogin )


router.get('/logout', (req,res)=>{
    req.logOut()
})

module.exports =router