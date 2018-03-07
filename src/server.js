var express = require('express');
var bodyParser = require('body-parser');
let router = require('./routes.js')

let goals

var app = express();

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/client/react-client/dist'));
// app.use(express.static(path.join(__dirname, '/client/react-client/dist')));
// app.use(express.static(__dirname + '/../node_modules'));

app.use(router)




// Example route. See server-spec.js for the related test.
app.get('/zen', function(req, res) {
  res.send('There are no accidents. - Master Oogway')
})

app.listen(8080, function () {
  console.log('GoalPosts App \nListening on port 8080...')
})

module.exports = app;
