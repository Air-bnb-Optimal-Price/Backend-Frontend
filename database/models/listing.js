'use strict';
module.exports = (sequelize, { STRING, INTEGER, FLOAT }) => {
  const Listing = sequelize.define('Listing', {
    country: STRING,
    zip: STRING,
    street_addr: STRING,
    long: INTEGER,
    lat: INTEGER,
    room_type: INTEGER,
    accomodates: INTEGER,
    bathrooms: FLOAT,
    bedrooms: INTEGER,
    beds: INTEGER,
    security_deposit: FLOAT,
    cleaning_fee: float,
    extra_people: FLOAT,
    cancellation_policy: INTEGER,
    price: INTEGER,
    minimum_nights: INTEGER,
    availability_365: INTEGER,

  }, {});
  Listing.associate = function (models) {
    Listing.belongsTo(models.User, {
      as: 'host',
      onDelete: 'CASCADE'
    })
  };
  return Listing;
};