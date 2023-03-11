//@ts-nocheck
import * as React from 'react';
import { Box } from '@mui/material';
import HomeScreen from './screens/discover';
import { Route, Routes } from 'react-router-dom';

const MovieScreen = React.lazy(
  () => import(/* webpackPrefetch: true*/ './screens/movie')
);
const PageNotFound = React.lazy(
  () => import(/* webpackPrefetch: true*/ './screens/page-not-found')
);

function App() {
  return (
    <Box display="flex">
      <Box flex={4}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movie/:movieId" element={<MovieScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
