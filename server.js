require("dotenv").config();
const express = require('express');
const app = express();
const path = require("path");
const auth = require("./routes/auth")
const admin =  require("./routes/admin");
const client = require("./routes/client");
const bp = require("body-parser");
const cookieParser = require("cookie-parser");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")))
app.use(bp.urlencoded({extended: true}));
app.use(express.json())
app.use(cookieParser())

app.use("/login",auth)
app.use("/admin",admin)
app.use("/client",client)


const port = process.env.LISTEN_PORT || 3000
app.listen(3000,function(){
    console.log("listen on " + port)
})
