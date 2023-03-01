import React from 'react';

import { Search } from '@mui/icons-material';
import { Paper, InputBase, IconButton, Box } from '@mui/material';

import { useForm } from 'react-hook-form';

const SearchBar = ({ onSubmit }: { onSubmit: (search: string) => void }) => {
  const { register, handleSubmit } = useForm({ defaultValues: { search: '' } });

  const handleSetQuery = ({ search }: { search: string }) => {
    onSubmit(search);
  };

  return (
    <Box display="flex" width="100%" justifyContent="center">
      <Paper
        component="form"
        onSubmit={handleSubmit(handleSetQuery)}
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
          {...register('search')}
        />
        <IconButton type="submit" aria-label="search" sx={{ p: '10px' }}>
          <Search color="primary" />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar;
