'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    listing_name: DataTypes.STRING,
    country: DataTypes.STRING,
    zip: DataTypes.STRING,
    street_addr: DataTypes.STRING,
    long: DataTypes.INTEGER,
    lat: DataTypes.INTEGER,
    room_type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    minimum_nights: DataTypes.INTEGER,
    availability_365: DataTypes.INTEGER
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User, {
      as: 'host',
      onDelete: 'CASCADE'
    })
  };
  return Listing;
};