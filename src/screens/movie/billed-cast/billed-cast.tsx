import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ActorProps } from '../../../utils/interfaces';
import movieError from '../../../imgs/movieError.svg';
import movieLoading from '../../../imgs/movieLoading.svg';

const BilledCast = ({
  actorsTopBilled,
  countTopBilled,
}: {
  actorsTopBilled: ActorProps[] | undefined;
  countTopBilled: number;
}) => {
  const [onLoad, setOnLoad] = React.useState(false);
  const handleOnLoad = () => {
    setOnLoad(true);
  };

  return (
    <Box width="100%">
      <Box p="0 30px">
        <Typography variant="h6" color="black">
          Top Billed Cast
        </Typography>

        <Box
          display="flex"
          gap={3}
          p="20px 0"
          sx={{
            overflowX: 'auto',
            '&::-webkit-scrollbar': { height: '10px' },
            '&::-webkit-scrollbar-thumb': {
              background: 'lightgray',
              borderRadius: '10px',
            },
          }}
        >
          {actorsTopBilled &&
            actorsTopBilled.map((actor) => {
              const nullImg = actor.profile_path === null;
              if (countTopBilled < 15) {
                countTopBilled++;
                return (
                  <Box width="138px">
                    <Box
                      width="138px"
                      height="175px"
                      display="flex"
                      alignItems="center"
                      justifyContent='center'
                      sx={{
                        borderRadius: '10px',
                        boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.46)',
                      }}
                    >
                      {onLoad ? null : (
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
                        alt="actor"
                        style={
                          onLoad
                            ? nullImg
                              ? {
                                  height: '100%',
                                  width: '50%',
                                  objectFit: 'fill',
                                }
                              : {
                                  objectFit: 'fill',
                                  width: '100%',
                                  maxHeight: '100%',
                                }
                            : { display: 'none' }
                        }
                        src={
                          actor.profile_path
                            ? `https://www.themoviedb.org/t/p/w138_and_h175_bestv2/${actor.profile_path}`
                            : movieError
                        }
                        onLoad={handleOnLoad}
                      />
                    </Box>
                    <Typography
                      sx={{ fontSize: '1.1rem' }}
                      variant="h6"
                      color="black"
                    >
                      {actor.name}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {actor.character}
                    </Typography>
                  </Box>
                );
              }
              return null;
            })}
        </Box>
      </Box>
    </Box>
  );
};
export default BilledCast;
