const { where } = require("sequelize")
const sequelize = require("../db/dbconnection")
const Place = require("../db/place")
const Storic = require("../db/storic")
const place = require("../db/place")

exports.createPlace = async (req,res) =>{
    console.log(req.body.date)
    var data = new Date(req.body.date)
    console.log(data)
    await sequelize.sync();
    await Place.create({
        luogo: req.body.luogo,
        indirizzo: req.body.indirizzo,
        dataIncidente: data,
        })
    await addStoricInjury(req.body.luogo,req.body.indirizzo,data)
    await sequelize.sync();
    await Place.findAll().then(d =>{
        res.render("main-page",{place: d})
    })
}
exports.renderModifyDatePage = async(req,res) =>{
    await sequelize.sync();
    await Place.findAll().then(d =>{
        res.render("main-page",{place: d})
    })
}
exports.changeDate = async (req,res)  =>{
await sequelize.sync();
await Place.update(
    {
        dataIncidente: req.body.newDate,
    },
    {
        where:
        {
            luogo: req.body.luogo,
            indirizzo: req.body.indirizzo,
        }
    }
)
var data = new Date(req.body.newDate)
await addStoricInjury(req.body.luogo,req.body.indirizzo,data)
await Place.findAll().then(p =>{
    res.render("main-page",{place: p})
})
}
exports.renderStoricPage = async (req,res) =>{
    await sequelize.sync();
    var lista = new Array();
    
    const places = await Place.findAll()
    for await (const place of places){
        await Storic.findAll({
            where: {
                indirizzo: place.indirizzo,
                luogo: place.luogo
            }
        }).then(s =>{
            lista.push(s.sort((a,b) => a.dataIncidente - b.dataIncidente))
        })
    }
    res.render("storic-page",{place: places, storico: lista})
}

exports.selectedPlace = async (req,res) => {
    await sequelize.sync();
    const place = await Place.findOne({
        where:{
            id: req.body.index
        }
    })
    if(place != null){
        res.render("modify-date",{place:place})
    } else{
        console.log("non trovato")
    }
}

addStoricInjury = async(luogo,indirizzo,data)=> {
    await sequelize.sync();
    await Storic.create({
      luogo: luogo,
      indirizzo: indirizzo,
      dataIncidente: data
    })
    console.log("added")
}
