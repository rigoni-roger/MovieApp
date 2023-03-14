import * as React from 'react';
import { Box, Paper } from '@mui/material';
import { MovieProps } from '../../../utils/interfaces';

const MovieInformationCard = ({
  data,
  movieInformationText,
}: {
  data: MovieProps | undefined;
  movieInformationText: React.ReactNode;
}) => {
  const [onLoad, setOnLoad] = React.useState(false);
  const handleOnLoad = () => {
    setOnLoad(true);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left calc((50vw - 170px) - 340px) top',
        backgroundSize: 'cover',
      }}
      width="100%"
    >
      <Box
        display="flex"
        width="100%"
        gap={3}
        sx={{
          backgroundImage:
            'linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)',
        }}
      >
        <Box
          display="flex"
          padding="30px 40px"
          flexDirection="row"
          justifyContent="center"
          width="100%"
          gap={5}
        >
          {onLoad ? null : (
            <Paper sx={{ minWidth: 300, height: 450 }} elevation={3} />
          )}
          <img
            alt="movie"
            style={{
              display: onLoad ? 'block' : 'none',
              borderRadius: '10px',
              boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.46)',
              minWidth: '300px',
              minHeight: '450px',
            }}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`}
            onLoad={handleOnLoad}
          />
          {movieInformationText}
        </Box>
      </Box>
    </Box>
  );
};
export default MovieInformationCard;
