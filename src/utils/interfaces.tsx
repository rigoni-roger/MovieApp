export interface DataResult {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
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
  backdrop_path: string;

  vote_average: number;
}

export interface ActorProps {
  id: unknown;
  name: string;
  popularity: number;
  profile_path: string | null;
  character: string;
}

export interface CreditProps {
  id: unknown;
  cast: ActorProps[];
}
