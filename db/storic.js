const { Sequelize,DataTypes, DATE } = require('sequelize');
const sequelize = require("./dbconnection")
module.exports = sequelize.define('Storic',{
    luogo:{
      type: DataTypes.STRING,
      allowNull: false
    },
    indirizzo:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataIncidente:{
      type: DataTypes.DATEONLY,
      allowNull: false,
    }
})