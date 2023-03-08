//@ts-nocheck
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { DataResult } from '../utils/movie';
import movieLoading from '../imgs/movieLoading.svg';
import movieError from '../imgs/movieError.svg';

const Movie = React.forwardRef(({ movie }: { movie: DataResult }, ref) => {
  const [mouseEnter, setMouseEnter] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  const handleOnMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleOnMouseLeave = () => {
    setMouseEnter(false);
  };

  const onLoad = () => {
    setLoaded(true);
  };

  const nullImg = movie.poster_path === null;

  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ cursor: 'pointer' }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <Paper
        ref={ref ?? null}
        elevation={mouseEnter ? 7 : 4}
        sx={{ width: 220, height: 330 }}
      >
        {loaded ? null : (
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
            }}
            alt="loading-img"
            src={movieLoading}
          />
        )}
        <img
          style={
            loaded
              ? nullImg
                ? {
                    height: '100%',
                    width: '60%',
                    objectFit: 'fill',
                  }
                : {
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                    filter: mouseEnter ? 'brightness(1.1)' : 'none',
                  }
              : { display: 'none' }
          }
          onLoad={onLoad}
          alt="img"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w220_and_h330_face/${movie?.poster_path}`
              : movieError
          }
        />
      </Paper>
      <Typography
        sx={{
          maxWidth: '200px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        variant="body1"
      >
        {movie.title ?? 'Loading...'}
      </Typography>
    </Box>
  );
});
export default Movie;
