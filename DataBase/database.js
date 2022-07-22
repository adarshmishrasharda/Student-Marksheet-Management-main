

const Sequelize = require('sequelize');

const sequelize = new Sequelize('linuxmachine','Adarsh','Aman@123',{
    host:"flexiserverdynamicsitelinux.mysql.database.azure.com",
    dialect:"mysql"
});

module.exports = sequelize;
