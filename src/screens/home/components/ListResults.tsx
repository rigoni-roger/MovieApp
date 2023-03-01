import React from 'react';

import { Box, Paper, Typography } from '@mui/material';

export const ListResults = ({ data }: { data: any }) => {
  const [mouseEnter, setMouseEnter] = React.useState('0');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'center', sm: 'center' },
        alignItems: { xs: 'center', sm: 'flex-start' },
        gap: 4,
      }}
    >
      <Box textAlign="center">
        <Paper
          onMouseEnter={() => setMouseEnter('3')}
          onMouseLeave={() => setMouseEnter('0')}
          elevation={3}
          sx={{ width: 250, height: 300 }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              filter: mouseEnter === '3' ? 'brightness(1.55)' : 'none',
            }}
            alt="img"
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          />
        </Paper>
        <Typography variant="h6">Cineminha</Typography>
      </Box>
      <Box textAlign="center">
        <Paper
          onMouseEnter={() => setMouseEnter('2')}
          onMouseLeave={() => setMouseEnter('0')}
          elevation={3}
          sx={{ width: 250, height: 300 }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              filter: mouseEnter === '2' ? 'brightness(1.55)' : 'none',
            }}
            alt="img"
            src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Paper>
        <Typography variant="h6">Variados</Typography>
      </Box>
    </Box>
  );
};
