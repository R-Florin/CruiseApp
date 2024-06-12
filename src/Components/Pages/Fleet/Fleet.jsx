import React from "react";
import "./Fleet.css";
import fleetList from "./Fdata";
import FCards from "./FCards";
import { Text } from "../../exportFiles";
import { FiAlertOctagon } from "react-icons/fi";
import { LuShip } from "react-icons/lu";

function Fleet({ searchQuery }) {
  const filteredFleet = fleetList.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="message">
        <h2>Our top ships</h2>
        <h3>
          <LuShip className="icon" />
          See the features of cruise ships that will accompany you on the most
          spectacular adventures.
        </h3>
      </div>
      <section>
        {filteredFleet.length > 0 ? (
          filteredFleet.map((item) => <FCards key={item.id} item={item} />)
        ) : (
          <p className="notfound">
            No ships found matching your search!
            <FiAlertOctagon />
          </p>
        )}
      </section>
      <Text />
    </>
  );
}

export default Fleet;
