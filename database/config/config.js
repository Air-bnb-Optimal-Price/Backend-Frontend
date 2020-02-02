require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DAb_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.PROD_DB_URL,
    dialect: 'postgres',
  },
}