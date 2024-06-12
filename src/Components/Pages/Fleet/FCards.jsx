import "./FCards.css";
import React from "react";

function FCards({ item }) {
  const { title, description, details, img } = item;

  return (
    <div className="fcards">
      <div className="image">
        <img src={img} alt="Image" />
      </div>
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="details">
        <ul>
          {Array.isArray(details) ? (
            details.map((detail, index) => (
              <li key={index}>
                {detail.icon} {detail.text}
              </li>
            ))
          ) : (
            <li>No details available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FCards;
