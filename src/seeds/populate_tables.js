exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('goals').del(),

    // TODO: DELETE ALL ENTRIES IN EXISITING TABLES

    // Insert seed entries
    knex('users').insert({username: 'alice', password: 'alice'}), // :(
    knex('users').insert({username: 'bob', password: 'bob'}),

    knex('goals').insert({name:'run', descriptions:' this goal is running', completed: false, user: 'alice'}),
    knex('goals').insert({name:'eat', descriptions:' this goal is eating', completed: false, user: 'bob'})
    // TODO: INSERT DATA INTO TABLES
  );
};
