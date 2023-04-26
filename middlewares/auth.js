const jwt = require("jsonwebtoken")

exports.checkAuth = async (req,res,next) => {
    console.log()
    const token = req.cookies.access_token;
    console.log(token)
    if(!token){
        return res.redirect("/login")
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err) =>{
        if(err){
            return res.status(403).json("invalid")
        }
        next();
    })
}