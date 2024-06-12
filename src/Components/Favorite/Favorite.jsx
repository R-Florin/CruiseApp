import React from "react";
import "./Favorite.css";
import { GrFavorite } from "react-icons/gr";
import { FiAlertOctagon } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Text } from "../exportFiles";

function Favorite({ favorites, setFavorites }) {
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <>
      <div className="fav-page">
        <div className="messagefav">
          <h1>
            Favorites
            <GrFavorite className="icon" />
          </h1>
          <h2>See the most desired vacations</h2>
        </div>
        <section className="favorite">
          {favorites.length > 0 ? (
            favorites.map((item) => (
              <div className="favbox" key={item.id}>
                <div className="favimg">
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
                <button
                  className="favremove"
                  onClick={() => removeFromFavorites(item.id)}
                >
                  <RiDeleteBin5Line />
                </button>
              </div>
            ))
          ) : (
            <p className="favp">
              No favorites added yet! <FiAlertOctagon />
            </p>
          )}
        </section>
      </div>
      <Text />
    </>
  );
}

export default Favorite;
