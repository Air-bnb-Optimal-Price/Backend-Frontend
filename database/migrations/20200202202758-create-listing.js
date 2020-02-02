'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listing_name: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      street_addr: {
        type: Sequelize.STRING
      },
      long: {
        type: Sequelize.NUMBER
      },
      lat: {
        type: Sequelize.NUMBER
      },
      room_type: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.NUMBER
      },
      minimum_nights: {
        type: Sequelize.NUMBER
      },
      availability_365: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listings');
  }
};