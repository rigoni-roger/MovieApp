import { useQuery } from '@tanstack/react-query';
import { KEY, API_SEARCH_ENGINE_ID } from './googleKeys';
import axios from 'axios';

export const fetchData = async (query: string) => {
  if (!query) {
    return;
  }
  return fetch(
    `https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=${API_SEARCH_ENGINE_ID}&q=${query}`
  ).then((response) => response.json());
};

export const useGoogleSearch = (query: string) => {
  const { data = null } = useQuery(['search', query], () => fetchData(query));

  return { data };
};

export const fetchPokemon = async (pokemon: string) => {
  if (!pokemon) {
    return;
  }
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.data);
};

export const useGetPokemon = (pokemon: string) => {
  const { data = null } = useQuery(['pokemon', pokemon], () =>
    fetchPokemon(pokemon)
  );

  return { data };
};
