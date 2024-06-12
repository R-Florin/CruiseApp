import React from "react";
import "./Deals.css";
import { GiSandsOfTime } from "react-icons/gi";
import Card from "./Cards/Cards";
import { Text } from "../../exportFiles";
function Deals() {
  return (
    <>
      <div className="offer">
        <h2>Seize the Moment!</h2>
        <h3>
          <GiSandsOfTime className="icon" /> Don’t miss the offers of the
          moment. Explore the possibilities for your upcoming vacation.
        </h3>
      </div>
      <Card />
      <Text />
    </>
  );
}

export default Deals;
