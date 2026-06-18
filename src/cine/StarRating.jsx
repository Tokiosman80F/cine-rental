import PropTypes from "prop-types";
import Star from "../assets/star.svg";
function StarRating({ value }) {
  const stars = Array(value).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="star icon" />
      ))}
    </>
  );
}

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default StarRating;
