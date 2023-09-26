import axios from "axios";
import { apiUrl } from "../utils/Constants";
import { PokemonDetailsResponse, PokemonResponse } from "../types";

/**
 * 
 * @param page 
 * @param limit 
 * @returns paginated pokemon list
 */
export const fetchPokemons = (page: number = 0, limit: number = 20): Promise<PokemonResponse> => 
  axios.get(`${apiUrl}pokemon?offset=${page * limit}&limit=${limit}`);

/**
 * 
 * @param url 
 * @returns all pokemon details by pokemon id
 */
export const fetchPokemonDetails = (id: number): Promise<PokemonDetailsResponse> => 
  axios.get(`${apiUrl}pokemon/${id}/`);
