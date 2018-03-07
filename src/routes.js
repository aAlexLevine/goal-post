var router = require('express').Router();
var jwt = require('jwt-simple'); // for encoding and decoding tokens
var goal = require('./models/goal.js');
var user = require('./models/user.js')

// TODO: ATTACH ROUTE HANDLERS
  // See 2-complete-routes/README.md for which routes you should implement first.

   //Returns an array of all Goal titles and ids by User
router.get('/goals', function(req, res) {
 console.log('--post fired')
 console.log('req.body',req.body)
  let user =req.body.name
  goal.findAllGoalsByUser(user)
    .then(function(data){
      console.log('data------',data)
      res.send(data);
  })
    .catch(function(err) {
      console.log('router.get(goals) - findallgoals', err)
    })
   
})


//Adds a new Goal to the Goals table
router.post('/goals', function(req, res) {
  console.log('--------post fired')
  console.log('---------req.body', req.body)
  goal.addGoal(req.body)
    .then(function(data){
      res.send('new goal set')
    })
      .catch(function(err){
        console.log('router.post(goals) - addGoals', err)
      }) 
})

//Returns details of a single Goal'
router.get('/goals/:id', function(req, res) {
  console.log('req.params--------', req.params.id)
  goal.getGoalById(req.params.id)
    .then(function(data){
      res.send(data)
      console.log('get request for goals by ID:', req.params.id)
    })
    .catch(function(err){
      console.log('router.get(/goals:id)', err)
    })


})

///////////////////////////////////////////////////////////////////
router.post('/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;


  // TODO: Complete the signup functionality:
    // Search for username
    // If taken, send a 409 status code
    // If available, hash the password and store it in the database
      // Send back a 201
});

router.post('/login', function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the login functionality:
    // Search for username
    // If not found, send back a 401 status code
    // If found, compare the hashed passwords
      // If there is a match
        // Create a token and send it to the client
      // If the match fails send back a 401 status code
});

module.exports = router;
