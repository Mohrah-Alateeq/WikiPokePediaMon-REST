// top level config ------------------------------------------------------
// require our packages and dependancies 

var express = require('express');
var mustache = require('mustache-express');
var port = 3000;


// app level config ------------------------------------------------------
// create our application and tell it what to do
var app = express();

// mustache set up
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

// import our controllers
var pokemonController = require('./controllers/pokemon_controller');

//route controllers
app.use('/pokemon', pokemonController);

app.get('/', function(req, res){
  res.render('./index');
})

// start the server!
app.listen(port, function () {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});