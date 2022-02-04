const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {} 

Traveller.init({
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
    }, 
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING, 
        validate: {
            isEmail: true
        }
    }
}, {
    sequelize
});

module.exports = Traveller;