const {model, Schema} = require('mongoose')



const userSchema =({
    name:String,
    email:String,
    password:String
},{
    timestamps:String,

})



module.exports = model('User', userSchema)