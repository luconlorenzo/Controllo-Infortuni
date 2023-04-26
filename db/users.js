const { Sequelize,DataTypes, DATE } = require('sequelize');
const sequelize = require("./dbconnection")
module.exports = sequelize.define('Users',{
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  })