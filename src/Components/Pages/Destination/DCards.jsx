import React from "react";
import "./DCards.css";
import Button from "react-bootstrap/Button";
import { FaOpencart, FaRegHeart } from "react-icons/fa";

function DCards({
  item,
  handleClick,
  handleAddToFavorites,
  handleRemoveFromFavorites,
  isFavorite,
}) {
  const { title, description, price, img } = item;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      handleRemoveFromFavorites(item);
    } else {
      handleAddToFavorites(item);
    }
  };

  return (
    <div className="cards">
      {isFavorite ? (
        <FaRegHeart className="heart-icon red " onClick={handleFavoriteClick} />
      ) : (
        <FaRegHeart className="heart-icon" onClick={handleFavoriteClick} />
      )}
      <div className="image">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="price">Price - from {price}€ / person</p>
        <Button
          onClick={() => handleClick(item)}
          variant="succes"
          type="submit"
          className="mt-3"
        >
          Add to cart <FaOpencart />
        </Button>
      </div>
    </div>
  );
}

export default DCards;
