var knex = require('knex')({
  // TODO: ADD DATABASE CONNECTION INFO HERE
  development: {
    client: 'sqlite3',
    connection: { user: 'root', database: './db.sqlite3' },
    seeds: {
      directory: './seeds/populate_tables.js'
  }
  },
  production: { client: 'sqlite3', connection: process.env.DATABASE_URL }
  });


module.exports = knex;

