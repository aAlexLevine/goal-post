exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.integer('id');
    // TODO: DESCRIBE THE USER TABLE
  });

  // TODO: CREATE ANY OTHER TABLES YOU NEED
};

exports.down = function(knex, Promise) {
  // TODO: DROP OTHER TABLES

  return knex.schema.dropTable('users');

};
