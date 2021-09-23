const { Datatype } =require("sequelize");
const sc = require("../databases");

const User = sc.define('User',{
    fullName:{
        type: Datatypes.STRING,
        allowNull : false
    },
    email:{
        type: Datatypes.STRING,
        allowNull : false
    },
    password:{
        type: Datatypes.STRING,
        allowNull : false
    }
})

module.exports = User;