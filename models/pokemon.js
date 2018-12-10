var connection = require('../db/dbconfig');
var pokemon = {};

pokemon.getAll = function(req, res, next) {
  connection.manyOrNone("SELECT * FROM pokemon;")
    .then(function(result) {
      res.locals.pokemon = result;
      next();
    })
    .catch(function(err){
      console.log(err);
    });
};

pokemon.getByID = function(req, res, next) {
  connection.one("SELECT * FROM pokemons WHERE id = $1", [req.params.id])
    .then(function(result){
      res.locals.selectedPokemon = result;
      next();
    })
    .catch(function(err){
      console.log(err);
    })
}

module.exports = pokemon;
