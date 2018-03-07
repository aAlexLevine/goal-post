var db = require('./db');

var User = {};

User.findByUsername = function(username) {
  return db('users').where({ username: username }).select('*')
    .then(function(user) {
      return user;
    })
    .catch(function(err) {
      console.error(err)
    });
};

//check that these don't need template literals 
User.addNewUser = function(username, password) {
  return db.insert([{username: username}, {password: password}], 'id').into('users')
}

// User.SELECTALLFROMUSERS = function() {
//   return db.select().table('users')
//   .then(function(user){
//     return user;
//   })
//   .catch(function(err) {
//     console.error(err)
//   });
  
// }


module.exports = User;
