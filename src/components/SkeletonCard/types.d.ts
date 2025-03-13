export interface Movie {
  id: string;
  title: string;
  description: string;
  poster_url: string;
  trailer_url: string;
  release_year: string;
  genre: string[];
  duration: string;
  rating_system: string;
  total_jumpscares: number;
  created_at: string;
}
