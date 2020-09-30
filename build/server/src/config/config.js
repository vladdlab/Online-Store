"use strict";

require('dotenv').config();

module.exports = {
  development: {
    database: 'onlinestore',
    username: 'postgres',
    password: '30093009',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'onlinestore_test',
    username: 'postgres',
    password: '30093009',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
//# sourceMappingURL=config.js.map