import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { getUrlImage } from "../utils/cine-utils";
import MovieModal from "./MovieModal";
import StarRating from "./StarRating";
import { MovieContext } from "../context";

function MovieCard({ movie }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const {cartData,setCartData}=useContext(MovieContext)
  console.log("Cart data in MovieCard",cartData)
  function handleCloseModal() {
    setSelectedMovie(null);
    setIsOpen(false);
  }
  function handleMovieSelected() {
    setSelectedMovie(movie);
    setIsOpen(true);
  }

  function handleAddToCart(event,movie){
    event.stopPropagation()
    // console.log("Add to cart",movie)
    const isFound=cartData.find(item=>item.id===movie.id)
    if(!isFound){
      setCartData([...cartData,movie])
    }else{
      alert("This movie is already in the cart")
    }
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
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <StarRating value={movie.rating} />
            </div>
            <a
              onClick={(e)=> handleAddToCart(e,movie)}
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
