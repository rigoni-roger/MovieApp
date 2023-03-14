import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieScreenHeader = () => {
  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box marginLeft="30px" display="flex" flex={1}>
        <Box component={Link} to="/">
          <Button variant="outlined">Back</Button>{' '}
        </Box>
      </Box>
      <Box flex={1} display="flex" justifyContent="center">
        <Typography variant="h5" sx={{ fontWeight: 700 }} color="primary">
          MOVIE SEARCH
        </Typography>
        {/* <h2>Movie Search App</h2> */}
      </Box>
      <Box flex={1}></Box>
    </Box>
  );
};
export default MovieScreenHeader;
