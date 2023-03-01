import React from 'react';
import { Box } from '@mui/material';
import SearchBar from './components/SearchBar';
import { useGetData, useGetMovieData } from './hooks/useGetData';
import { ListResults } from './components/ListResults';

export const HomeScreen = () => {
  const [query, setQuery] = React.useState('');
  const { data } = useGetMovieData(query);

  const onSubmit = (search: string) => {
    setQuery(search);
  };
  return (
    <Box
      p={'30px 50px'}
      display="flex"
      flexDirection="column"
      gap={5}
      width="100%"
    >
      <SearchBar onSubmit={onSubmit} />
      <ListResults data={data} />
    </Box>
  );
};
