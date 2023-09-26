import { fetchPokemonDetails, fetchPokemons } from "../services/Pokedex.service"
import { PokemonDetailsResponse, PokemonResponse } from "../types"

/**
 * 
 * @param req 
 * @param res 
 */
export const getPokemons = async (req, res) => {
  try {
    // get pagination params
    const { query: { page, limit }} = req;
    // get data to send to UI
    const { data: { results, count, next }}: PokemonResponse = await fetchPokemons(page, limit);
    res.status(200).send({
      data: results,
      count,
      hasNext: !!next
    })
  } catch (error) {
    // any error will be send to UI to handle it propertly
    res.status(500).send({
      error
    })
  }
}

/**
 * 
 * @param req 
 * @param res 
 */
export const getPokemonDetails = async (req, res) => {
  try {
    // get and rename pokemon id to fetch details
    const { id: pokemonId } = req.params;
    // read payload from response
    const { data: { name, id, sprites, types, stats }}: PokemonDetailsResponse = await fetchPokemonDetails(pokemonId);
    res.status(200).send({
      data: {
        name,
        id,
        avatar: sprites.front_default,
        types,
        stats
      },
    })
  } catch (error) {
    // any error will be send to UI to handle it propertly
    res.status(500).send({
      error
    })
  }
}