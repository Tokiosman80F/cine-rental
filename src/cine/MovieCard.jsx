import { useState } from "react";
import { getUrlImage } from "../utils/cine-utils";
import MovieModal from "./MovieModal";
import StarRating from "./StarRating";
function MovieCard({ movie }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleCloseModal() {
    setSelectedMovie(null);
    setIsOpen(false);
  }
  function handleMovieSelected() {
    setSelectedMovie(movie);
    setIsOpen(true);
  }

  return (
    <>
      {isOpen && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
      <figure className="p-4 cursor-pointer border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={handleMovieSelected}>
          <img
            className="w-full object-cover"
            src={getUrlImage(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <StarRating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}

export default MovieCard;
