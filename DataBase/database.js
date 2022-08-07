

const Sequelize = require('sequelize');

const sequelize = new Sequelize('dynamicsitedb','Adarsh','Aman@123',{
    host:"dynamicsitedb.mysql.database.azure.com",
    dialect:"mysql"
});

module.exports = sequelize;
