const { Sequelize,DataTypes, DATE } = require('sequelize');
const sequelize = require("./dbconnection")
module.exports = sequelize.define('Place',{
    luogo:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    indirizzo:{
      type: DataTypes.STRING,
      allowNull: null
    },
    dataIncidente:{
      type: DataTypes.DATE,
      allowNull: false,
    },
})