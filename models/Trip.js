const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {} 

Trip.init({
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
    }, 
    trip_budget: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    traveller_amount: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize
});

module.exports = Trip;