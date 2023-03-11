import React from 'react';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import { Search, HourglassEmpty } from '@mui/icons-material';

import { useInfiniteManyMovies } from '../utils/movie';
import { useForm } from 'react-hook-form';
import debounce from 'lodash.debounce';
import MovieList from '../components/movie-list';

const HomeScreen: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const { register, handleSubmit } = useForm({ defaultValues: { search: '' } });
  const [queried, setQueried] = React.useState(false);
  const { data, isLoading, isFetching, isSuccess, hasNextPage, fetchNextPage } =
    useInfiniteManyMovies(query);
  const pages = data?.pages;

  const onSubmit = ({ search }: { search: string }) => {
    setQuery(search);
    setQueried(true);
  };

  const updateQuery = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!queried) {
      setQueried(true);
      setQuery(event?.target?.value);
      return;
    }
    if (event.target.value === '') {
      setQueried(false);
      setQuery(event?.target?.value);
    }
    setQuery(event?.target?.value);
  };

  const debounceUpdateQuery = debounce(updateQuery, 500);

  React.useEffect(() => {
    let fetching = false;
    const onScroll = async (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();

        fetching = false;
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <p>Loading the search screen...</p>;

  return (
    <Box
      p={'30px 0px'}
      display="flex"
      flexDirection="column"
      gap={5}
      width="100%"
    >
      <Box display="flex" width="100%" justifyContent="center">
        <Paper
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: { xs: 250, sm: 400 },
            display: 'flex',
            alignItems: 'center',
            p: '2px 4px',
            border: '1px solid transparent',
            '&:hover': {
              border: '1px solid lightgray',
            },
          }}
        >
          <InputBase
            placeholder="Search a movie"
            sx={{ flex: 1, ml: 1 }}
            inputProps={{ 'aria-label': 'search movie' }}
            {...register('search', {
              onChange: debounceUpdateQuery,
            })}
          />
          <IconButton
            disabled={!!isFetching}
            type="submit"
            aria-label="search"
            sx={{ p: '10px' }}
          >
            {!!isFetching ? (
              <HourglassEmpty color="primary" />
            ) : (
              <Search color="primary" />
            )}
          </IconButton>
        </Paper>
      </Box>

      {queried ? (
        <Box display="flex" justifyContent="center">
          {isSuccess ? (
            pages &&
            pages[0].results.length > 0 ? null : !!isFetching ? null : (
              <p>Sorry, we don`t have this movie. Try another.</p>
            )
          ) : null}
        </Box>
      ) : (
        <Box display="flex" justifyContent="center">
          <p>Search for some movie...</p>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'center' },
          alignItems: { xs: 'center', sm: 'flex-start' },
          gap: 4,
        }}
      >
        {pages && pages?.length > 0
          ? pages.map((page, idx) => {
              const { results } = page;
              return results && <MovieList key={idx} results={results} />;
            })
          : null}
      </Box>
    </Box>
  );
};

export default HomeScreen;
