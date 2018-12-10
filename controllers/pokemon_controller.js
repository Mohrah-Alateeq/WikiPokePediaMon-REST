var express = require('express');
var router = express.Router();
var pokemon = require('../models/pokemon');


router.get('/:id', pokemon.getByID, function(req, res){
  res.send(res.locals.selectedPokemon);
})

router.get('/', pokemon.getAll, function(req, res) {
  mustacheVariables = {
    pokemonList: res.locals.pokemon,
  };

  res.render('./pokemon/index.html', mustacheVariables);
});


module.exports = router;
