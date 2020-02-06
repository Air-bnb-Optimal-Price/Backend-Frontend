'use strict';
module.exports = (sequelize, { STRING, INTEGER, FLOAT }) => {
  const Listing = sequelize.define('Listing', {
    user_id: INTEGER,
    country: STRING,
    zip: STRING,
    street_addr: STRING,
    longitude: FLOAT,
    latitude: FLOAT,
    room_type: INTEGER,
    accommodates: INTEGER,
    bathrooms: FLOAT,
    bedrooms: INTEGER,
    beds: INTEGER,
    security_deposit: FLOAT,
    cleaning_fee: FLOAT,
    extra_people: FLOAT,
    cancellation_policy: INTEGER,
    price: FLOAT,
    minimum_nights: INTEGER,
    property_type: INTEGER,
  }, {});

  return Listing;
};