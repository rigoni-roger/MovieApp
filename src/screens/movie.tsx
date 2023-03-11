import * as React from 'react';
import { Box, Paper } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useMovie } from '../utils/movie';

const MovieScreen = () => {
  const { movieId } = useParams();
  const [onLoad, setOnLoad] = React.useState(false);

  const handleOnLoad = () => {
    setOnLoad(true);
  };
  const { data } = useMovie(movieId);
  return (
    <Box
      p={'30px 0px'}
      display="flex"
      flexDirection="column"
      gap={5}
      width="100%"
      alignItems="center"
    >
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        <Link to="/">Back</Link>
        <h2>Movie Search App</h2>
      </Box>
      <Box display="flex" width="100%" gap={3}>
        <Box display="flex" padding="0 40px 0 40px" width="100%" gap={5}>
          {onLoad ? null : (
            <Paper sx={{ minWidth: 300, height: 450 }} elevation={3} />
          )}
          <img
            alt="movie"
            style={{ display: onLoad ? 'block' : 'none' }}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`}
            onLoad={handleOnLoad}
          />

          <Box display="flex" width="100%" flexDirection="column" gap={3}>
            <div>
              <h1>{data?.title}</h1>
              <h4>{data?.release_date}</h4>
              <p>{data?.tagline}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p>Avaliaçao: {data?.vote_average}</p>
            </div>
            <h5>{data?.overview}</h5>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                rowGap: '20px',
                columnGap: '5px',
              }}
            >
              <h2 style={{ minWidth: '31%' }}>atores</h2>
              <h2 style={{ minWidth: '31%' }}>atores</h2>
              <h2 style={{ minWidth: '31%' }}>atores</h2>
              <h2 style={{ minWidth: '31%' }}>atores</h2>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default MovieScreen;
