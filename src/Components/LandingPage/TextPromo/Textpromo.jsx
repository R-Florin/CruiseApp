import React from "react";
import "./Textpromo.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Promotext() {
  return (
    <div className="text">
      <h2>Top Choices of our customers</h2>
      <Button
        className="buttonpro"
        as={Link}
        to={"/Destinations"}
        type="submit"
        variant="outline-success-button"
      >
        Check it now!
      </Button>
    </div>
  );
}
export default Promotext;
