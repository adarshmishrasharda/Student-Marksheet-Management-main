

const Sequelize = require('sequelize');

const sequelize = new Sequelize('adarshmysqlserver','adarsh','Aman@123',{
    host:"adarshmysqlserver.mysql.database.azure.com",
    dialect:"mysql"
});

module.exports = sequelize;
