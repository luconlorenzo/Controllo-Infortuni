const { Sequelize,DataTypes, DATE } = require('sequelize');
module.exports = new Sequelize(process.env.DATABASE_NAME, process.env.USER_NAME, process.env.USER_PASSWORD, {
    host: process.env.HOST_ID,
    dialect: process.env.DATABASE_DIALETICS,
    port:  process.env.PORT_ID,
    dialectOptions: {
      options: {
        encrypt: true 
      }
    }
  });