import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

export interface DataResult {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  release_date: Date;
}

export interface DataMovies {
  page: number;
  results: DataResult[];
  total_pages: number;
  total_results: number;
}

const API_URL_SEARCH =
  'https://api.themoviedb.org/3/search/movie?api_key=0c52f44eabb81b4b7abd8688354d982f&language=en-US&query=';

const useMovie = (query: string, page = 1) => {
  const queryClient = useQueryClient();
  const { data, isLoading, isSuccess, isFetching } = useQuery(
    ['movies', { query, page }],
    () =>
      axios
        .get<DataMovies>(
          `${API_URL_SEARCH + encodeURIComponent(query)}&page=${page}`
        )
        .then((res) => res.data),
    {
      initialData: undefined,
      keepPreviousData: true,
      onSuccess: (response) => {
        const { page: nowPage, total_pages } = response;
        const nextPage = total_pages - nowPage;
        if (nextPage > 0) {
          queryClient.prefetchQuery(['movies', { query, page: page + 1 }], () =>
            axios
              .get(
                `${API_URL_SEARCH + encodeURIComponent(query)}&page=${page + 1}`
              )
              .then((res) => res.data)
          );
        }
        return;
      },
    }
  );
  return { data, isLoading, isSuccess, isFetching };
};

const useInfiniteManyMovies = (query: string) => {
  const {
    data,
    error,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
    isFetching,
  } = useInfiniteQuery(
    ['movies', { query }],
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
    }
  );
  return {
    data,
    isLoading,
    isSuccess,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isError,
  };
};

export { useMovie, useInfiniteManyMovies };
