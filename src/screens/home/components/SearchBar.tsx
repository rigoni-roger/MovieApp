import React from 'react';
import { Search } from '@mui/icons-material';
import { Paper, InputBase, IconButton } from '@mui/material';

const SearchBar = () => {
  return (
    <>
      <Paper
        component="form"
        sx={{
          width: 400,
          display: 'flex',
          alignItems: 'center',
          p: '2px 4px',
          '&:hover': {
            border: '1px solid lightgray',
          },
        }}
      >
        <InputBase
          placeholder="Search a movie"
          sx={{ flex: 1, ml: 1 }}
          inputProps={{ 'aria-label': 'search movie' }}
        />
        <IconButton type="button" aria-label="search" sx={{ p: '10px' }}>
          <Search color="primary" />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
