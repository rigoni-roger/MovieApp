import { useQuery } from '@tanstack/react-query';
import { KEY, API_SEARCH_ENGINE_ID } from './googleKeys';

const fetchData = async (query: string) => {
  fetch(
    `https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=${API_SEARCH_ENGINE_ID}&q=${query}`
  ).then((response) => response.json());
};

const useGoogleSearch = (query: string) => {
  const { data } = useQuery(['search', query], () => fetchData(query));

  return { data };
};
export default useGoogleSearch;
