const express       = require('express')
const router        = express.Router()
const passport      = require("../config/passport");
const {authSignup, profile, sendUsertoFront}  =require('../controllers/authSignup')

function ensureLogin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({ msg: 'Log in first' })
  }
}
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});
router.post('/signup', authSignup)
router
.post("/login" ,passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true,
  }),
  sendUsertoFront
)



.get('/logout', (req,res)=>{
    req.logOut()
})



router.get('/profile', ensureLogin ,profile)

module.exports =router