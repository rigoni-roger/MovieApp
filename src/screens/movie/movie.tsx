import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useCreditMovie, useMovie } from '../../utils/movie';

import { Box } from '@mui/material';
import MovieScreenHeader from './header';
import MovieInformationCard from './movie-information';
import BilledCast from './billed-cast';
import MovieInformationText from './movie-information/movie-information-text/movie-information-text';

const MovieScreen = () => {
  const { movieId } = useParams();
  const { data: creditData } = useCreditMovie(movieId);
  const actorsArray = creditData?.cast;
  let countTopBilled = 0;
  let actorsTopBilled = actorsArray?.map((actor) => {
    return actor;
  });

  actorsTopBilled?.sort((a, b) => {
    if (a.popularity < b.popularity) {
      return 1;
    }
    if (a.popularity > b.popularity) {
      return -1;
    }
    return 0;
  });

  const { data } = useMovie(movieId);
  return (
    <Box
      p={'30px 0px'}
      display="flex"
      flexDirection="column"
      gap={5}
      width="100%"
      // alignItems="center"
    >
      <MovieScreenHeader />

      <MovieInformationCard
        data={data}
        movieInformationText={
          <MovieInformationText data={data} actorsArray={actorsArray} />
        }
      />

      <BilledCast
        actorsTopBilled={actorsTopBilled}
        countTopBilled={countTopBilled}
      />
    </Box>
  );
};
export default MovieScreen;
