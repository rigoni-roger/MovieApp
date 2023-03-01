import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import { API_SEARCH_ENGINE_ID, KEY } from '../../../useGoogleSearch/googleKeys';

export const useGetData = (query: string) => {
  const { data } = useQuery(['pokemon', query], () =>
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then((res: any) => res.data)
  );
  return { data };
};
export const useGetMovieData = (query: string) => {
  const { data } = useQuery(['search', query], () =>
    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=${API_SEARCH_ENGINE_ID}&q=${query}`
      )
      .then((res: any) => res.data)
  );
  return { data };
};
