exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('userId');
      table.string('username')
      table.string('password')
    }),
    knex.schema.createTableIfNotExists('goals', function (table) {
      table.increments('goalId')
      table.string('name')
      table.string('descriptions')
      table.boolean('completed')
      table.string('user')
      table.foreign('user').references('userId').inTable('users')
    })
    
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('goals')
  ])
};



// exports.goal = function(knex, Promise) {
//   return knex.schema.createTableIfNotExists('goals', function (table) {
//     table.increments('goalId')
//     table.string('name')
//     table.string('descriptions')
//     table.foreign('user').references('userId').inTable('users')
//   })

// }

