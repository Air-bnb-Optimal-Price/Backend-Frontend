module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Listings',
    [
      {
        listing_name: 'German thing at German place',
        country: 'janedoe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jon Doe',
        email: 'jondoe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};