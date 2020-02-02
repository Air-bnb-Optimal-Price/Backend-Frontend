'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    listing_name: DataTypes.STRING,
    country: DataTypes.STRING,
    zip: DataTypes.STRING,
    street_addr: DataTypes.STRING,
    long: DataTypes.NUMBER,
    lat: DataTypes.NUMBER,
    room_type: DataTypes.STRING,
    price: DataTypes.NUMBER,
    minimum_nights: DataTypes.NUMBER,
    availability_365: DataTypes.NUMBER
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
  };
  return Listing;
};