import express from 'express';
import { getPokemonDetails, getPokemons } from '../controllers/Pokedex.controller';
import { validateIdParam } from '../utils/Constants';
// init express router
const PokedexRouter = express.Router();
// routes definition
PokedexRouter.get('/pokemons', getPokemons);
// use meddleware function to validate valid id
PokedexRouter.get('/pokemon/details/:id', validateIdParam,  getPokemonDetails)

export default PokedexRouter