const { Datatypes, DataTypes } =require("sequelize");
const sc = require("../databases");

const User = sc.define('User',{
    fullName:{
        type: DataTypes.STRING,
        allowNull : false
    },
    email:{
        type: DataTypes.STRING,
        allowNull : false
    },
    password:{
        type: DataTypes.STRING,
        allowNull : false
    }
})

module.exports = User;