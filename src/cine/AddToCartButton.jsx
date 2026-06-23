import PropTypes from "prop-types";
import TagIcon from "../assets/tag.svg";

export default function AddToCartButton({ movie, onAddToCart }) {
  return (
    <button
      onClick={(e) => onAddToCart(e, movie)}
      className="w-full bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
      href="#"
    >
      <img src={TagIcon} alt="" />
      <span>${movie.price} | Add to Cart</span>
    </button>
  );
}

AddToCartButton.propTypes = {
  movie: PropTypes.shape({
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
