import React from 'react';
import { DataResult } from '../utils/movie';
import Movie from './movie-row';

const MovieList = ({ results }: { results: any }) => {
  const lastPostRef = React.useRef();

  return results?.map((movie: DataResult, idx: number) => {
    if (results.length === idx + 1) {
      return <Movie ref={lastPostRef} key={movie.id} movie={movie} />;
    }
    return <Movie key={movie.id} movie={movie} />;
  });
};

export default MovieList;
