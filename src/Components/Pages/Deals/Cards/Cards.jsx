import "./Cards.css";

import React from "react";
import Button from "react-bootstrap/Button";
import { FaRegHeart, FaOpencart } from "react-icons/fa";
import {
  Asia,
  Britain,
  Domenican,
  Madagascar,
  Norpicture,
} from "../../../exportFiles";

function card() {
  return (
    <div className="deal-card">
      <div className="card1">
        <FaRegHeart className="icon01" />
        <img src={Asia} alt="Asia" />
        <h2>
          12-Night Cruise to the Philippines, China, Taiwan, and Japan aboard
          the Norwegian Spirit
        </h2>
        <span>
          <p>
            Anyone wishing to travel with the Norwegian Spirit will do so in
            unique style, as this ship offers a wide range of facilities, from
            16 restaurants featuring French cuisine to the delicious dishes at
            the Asian restaurant Shogun.
          </p>
          Price: <s>2090€</s> Now just 1799€!
        </span>
        <Button variant="succes" type="submit" className="mt-3">
          Add to cart <FaOpencart />
        </Button>
      </div>

      <div className="card2">
        <FaRegHeart className="icon01" />
        <img src={Britain} alt="Britain" />
        <h2>
          Norwegian Prima – 10-Night Cruise to Iceland, Norway, the Netherlands,
          Belgium, and the United Kingdom
        </h2>
        <span>
          <p>
            Norwegian Prima opens a new class of ships for Norwegian Cruise
            Line. The first sailings are scheduled for the summer of 2022, and
            the new ship will offer spectacular entertainment and recreation
            activities, including the largest race track at sea, the first
            theater that transforms into a nightclub, and the first dry slides
            with free fall.
          </p>
          Price: <s>1750€</s> Now just 1550€!
        </span>
        <Button variant="succes" type="submit" className="mt-3">
          Add to cart <FaOpencart />
        </Button>
      </div>

      <div className="card3">
        <FaRegHeart className="icon01" />
        <img src={Domenican} alt="Domenican" />
        <h2>
          10-Night Cruise to the USA, Puerto Rico, St. Maarten, US Virgin
          Islands, British Virgin Islands, and the Dominican Republic aboard the
          Norwegian Joy
        </h2>
        <span>
          <p>
            Onboard, you can get an adrenaline rush on the two-level race track
            or immerse yourself in the wonders of the virtual world at the
            Galaxy Pavilion. Indulge in luxury in the new Concierge cabins,
            spacious and elegant, and enjoy exceptional dining experiences in
            the numerous onboard restaurants. Norwegian Joy certainly offers the
            joy of a perfect vacation!
          </p>
          Price: <s>1900€</s> Now just 1890€!
        </span>
        <Button variant="succes" type="submit" className="mt-3">
          Add to cart <FaOpencart />
        </Button>
      </div>

      <div className="card4">
        <FaRegHeart className="icon01" />
        <img src={Madagascar} alt="Madagascar" />
        <h2>
          14-Night Cruise to Mauritius, Réunion, Madagascar, Seychelles, Oman,
          the United Arab Emirates, and Qatar aboard the Norwegian Dawn
        </h2>
        <span>
          <p>
            Norwegian Dawn offers you over 17 delicious dining options, 10 bars
            and lounges where entertainment is guaranteed, a fitness and spa
            center, pools, and many other amenities that you will discover only
            when you step on board. Children can play at the T-Rex pool or at
            the dedicated kids' center where they will surely make friends with
            other children their age. Additionally, this ship offers a range of
            spacious rooms to suit every family and budget.
          </p>
          Price: <s>1540€</s> Now just 1390€!
        </span>
        <Button variant="succes" type="submit" className="mt-3">
          Add to cart <FaOpencart />
        </Button>
      </div>
      <div className="card5">
        <FaRegHeart className="icon01" />
        <img src={Norpicture} alt="Norpicture" />
        <h2>
          10-Night Cruise to Iceland and Greenland aboard the Norwegian Star
        </h2>
        <span>
          <p>
            Freshly renovated, the Norwegian Star shines brighter than ever with
            new dining options, updated menus at the Asian specialty restaurant:
            Ginza Asian, and two new slides at the pool to keep the little ones
            active. Enjoy peaceful moments at Mandara Spa®, work out in the
            fitness center, or eagerly anticipate the onboard entertainment
            evenings. If you're still not convinced, we're pleased to announce
            that generous shows await you at the Stardust Theater, the casino,
            and why not the Oceanview Spinnaker Lounge where you can practice
            your dance steps every night.
          </p>
          Price: <s>1600€</s> Now just 1470€!
        </span>
        <Button variant="succes" type="submit" className="mt-3">
          Add to cart <FaOpencart />
        </Button>
      </div>
    </div>
  );
}

export default card;
