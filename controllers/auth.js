const jwt = require('jsonwebtoken')
const users = require("../db/users");
const { json } = require('body-parser');


exports.renderLoginPage = async (req,res) => {
    res.render("login-page")
} 

exports.handleLogin = async (req,res) => {
    const password = req.body.password;
    const username = req.body.username;
    const foundUser = await users.findOne({
        where:{
            name: username,
            password : password,
        }
    })
    if(foundUser == null){
       return res.status(401).redirect("/login")
    }
    const token = jwt.sign(
        { id: foundUser._id },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "2000h",
        }
    );
    return res.cookie("access_token",token,{
        httpOnly: true
    }).redirect("/admin")
}