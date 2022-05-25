const {DataTypes} = require('sequelize');

const database = require('../connSequelize');


const User = database.define ('User',  {

    id:{

        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },

     firstName:{

        type: DataTypes.STRING,
        allowNull: true,
        allowEmpty: false,

     },


     occupation:{

        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
     },

     password:{

        type: DataTypes.STRING,
        allowNull: false,
        isEmpty: false,
     },

     userName:{
        type: DataTypes.STRING,
        allow_empty: false,
        allowNull: false,
    }, 

})

//User.sync({ force: true });
module.exports = User;