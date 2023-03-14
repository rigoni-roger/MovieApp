import React from 'react';
import { DataResult } from '../../../utils/interfaces';
import Movie from './movie-row';

const MovieList = ({ results }: { results: any }) => {
  return results?.map((movie: DataResult) => {
    return <Movie key={movie.id} movie={movie} />;
  });
};

export default MovieList;
