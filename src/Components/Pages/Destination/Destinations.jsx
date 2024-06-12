import React from "react";
import list from "../../../data";
import "./Destination.css";
import DCards from "./DCards";
import { FaRegFaceGrinStars } from "react-icons/fa6";
import { FiAlertOctagon } from "react-icons/fi";
import { Text } from "../../exportFiles";

function Destinations({
  handleClick,
  handleAddToFavorites,
  handleRemoveFromFavorites,
  favorites,
  searchQuery,
}) {
  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="message">
        <h2>Top Destinations</h2>
        <h3>
          <FaRegFaceGrinStars className="icon" />
          See below the most sought-after tourist attractions.
        </h3>
      </div>
      <section>
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <DCards
              item={item}
              key={item.id}
              handleClick={handleClick}
              handleAddToFavorites={handleAddToFavorites}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
              isFavorite={favorites.some((favorite) => favorite.id === item.id)}
            />
          ))
        ) : (
          <p className="notfound">
            No destinations found matching your search!
            <FiAlertOctagon />
          </p>
        )}
      </section>
      <Text />
    </>
  );
}

export default Destinations;
