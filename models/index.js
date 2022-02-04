const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');



Trip.belongsTo(Location);
Trip.belongsTo(Traveller);
Location.hasMany(Trip);
Traveller.hasMany(Trip);

console.log("Hello from index.js model!");
module.exports = {
    Location: Location, 
    Traveller: Traveller, 
    Trip: Trip
}