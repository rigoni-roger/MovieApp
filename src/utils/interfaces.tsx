export interface DataResult {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  tagline: string;
  vote_average: number;
}

export interface DataMovies {
  page: number;
  results: DataResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  tagline: string;
  vote_average: number;
}
