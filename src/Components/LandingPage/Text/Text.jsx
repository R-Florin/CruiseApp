import React from "react";
import Logo from "../../Assets/Images/Logo.png";
import { MdAllInclusive } from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import "./Text.css";

function Text() {
  return (
    <div className="Logo">
      <img src={Logo} alt="Logo" />
      <h2>
        Everything <MdAllInclusive className="t-icon" /> and Everywhere{" "}
        <FaRoute className="t-icon" />
      </h2>
    </div>
  );
}

export default Text;
