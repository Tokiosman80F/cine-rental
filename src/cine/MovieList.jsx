import { getAllMovies } from "../data/movies";

import MovieCard from "./MovieCard";


const movies = getAllMovies();

function MovieList() {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => ( <MovieCard key={movie.id} movie={movie}/> ))}
      </div>
    </div>
  );
}

export default MovieList;
