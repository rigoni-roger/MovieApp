import { Box, Typography } from '@mui/material';
import { ActorProps, MovieProps } from '../../../../utils/interfaces';
import CircleRating from '../../circle-rating';

const MovieInformationText = ({
  data,
  actorsArray,
}: {
  data: MovieProps | undefined;
  actorsArray: ActorProps[] | undefined;
}) => {
  let countActor = 0;

  return (
    <Box
      display="flex"
      height="100%"
      marginTop={5}
      flexWrap="wrap"
      flexDirection="column"
      gap={3}
    >
      <Box>
        <Typography variant="h4" sx={{ fontWeight: '600' }} color="white">
          {data?.title}
        </Typography>
        <Typography variant="body1" color="white">
          {data?.release_date}
        </Typography>
        <Typography variant="body1" color="white">
          {data?.tagline}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <CircleRating
          colorText="white"
          colorBorder="#21d07a"
          percent={data?.vote_average}
          size={70}
        />
        <Typography variant="h6" color="white">
          User Score
        </Typography>
      </Box>
      <Typography variant="body1" color="white">
        {data?.overview}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          rowGap: '20px',
          columnGap: '5px',
        }}
      >
        {actorsArray &&
          actorsArray.map((actor) => {
            if (countActor < 4) {
              countActor++;
              return (
                <Box
                  key={countActor}
                  display="flex"
                  flexDirection="column"
                  sx={{ minWidth: '31%' }}
                >
                  <Typography variant="h6" color="white">
                    {actor.name}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {actor.character}
                  </Typography>
                </Box>
              );
            }
            return null;
          })}
      </Box>
    </Box>
  );
};
export default MovieInformationText;
