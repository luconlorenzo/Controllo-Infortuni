const Place = require("../db/place")

exports.getPage = (req,res) =>{
    Place.findAll().then(d =>{
        console.log(d)
        res.render("index",{place: d})
    })
}