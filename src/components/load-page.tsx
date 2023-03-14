import { Box } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';

const LoadPage = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
};
export default LoadPage;
