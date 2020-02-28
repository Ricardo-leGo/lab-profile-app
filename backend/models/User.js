const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')


imgDef = `https://i.picsum.photos/id/${Math.round(Math.random()*1084)}/200/200.jpg`
const  userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    isactive:{
        type:Boolean,
        default:false
    },
    projects:[{type:String}],
    img:{
        type:String,
        default:imgDef}

},{
    timestamps: true,
    versionKey: false
})


userSchema.plugin(PLM, { usernameField: "email" });
module.exports = model("User", userSchema)