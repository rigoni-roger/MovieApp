import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import { DataMovies, MovieProps } from './interfaces';
import { createKeys } from './create-keys';

const API_KEY = 'api_key=0c52f44eabb81b4b7abd8688354d982f';

const API_URL_SEARCH =
  'https://api.themoviedb.org/3/search/movie?api_key=0c52f44eabb81b4b7abd8688354d982f&language=en-US&query=';

const API_URL_MOVIE = 'https://api.themoviedb.org/3/movie/';

const keyMovies = createKeys('movies');

const useMovie = (moveId: string | undefined) => {
  const queryResults = useQuery(keyMovies.details(moveId), () =>
    axios
      .get<MovieProps>(`${API_URL_MOVIE + moveId}?${API_KEY}&language=en-US`)
      .then((res) => res.data)
  );
  return queryResults;
};

const useInfiniteManyMovies = (query: string) => {
  const queryClient = useQueryClient();
  const queryResults = useInfiniteQuery(
    keyMovies.infinity(query),
    ({ pageParam = 1 }) =>
      axios
        .get<DataMovies>(
          `${API_URL_SEARCH + encodeURIComponent(query)}&page=${pageParam}`
        )
        .then((res) => res.data),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.total_pages - lastPage.page > 0
          ? lastPage.page + 1
          : undefined;
      },
      onSuccess: (data) => {
        const lastPage = data.pages.length - 1;
        data?.pages[lastPage]?.results?.forEach((movie) => {
          queryClient.setQueryData(
            keyMovies.details(movie.id.toString()),
            movie
          );
        });
      },
      keepPreviousData: true,
    }
  );
  return queryResults;
};

export { useMovie, useInfiniteManyMovies };
