import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import Caraibe from "../../Assets/Images/caraibe.jpg";
import Antartica from "../../Assets/Images/antartica.jpeg";
import Fiord from "../../Assets/Images/fiord.jpg";
import Mexico from "../../Assets/Images/mexico.jpg";
import Bahamas from "../../Assets/Images/bahamas.jpg";
import Portugal from "../../Assets/Images/portugal.jpg";
import Turkey from "../../Assets/Images/turkey.jpg";
import Venice from "../../Assets/Images/venice.jpg";
import Portofino from "../../Assets/Images/Portofino.jpg";

function Slider() {
  return (
    <div className="Carusel">
      <Carousel className="slider" indicators={false}>
        <Carousel.Item className="s-item" interval={3000}>
          <img className="s-img" src={Venice} alt="Venice" />
          <Carousel.Caption className="s-caption">
            <h3>VENICE</h3>
            <p>
              Venice, the capital of northern Italy’s Veneto region, is built on
              more than 100 small islands in a lagoon in the Adriatic Sea. It
              has no roads, just canals – including the Grand Canal thoroughfare
              – lined with Renaissance and Gothic palaces. The central square,
              Piazza San Marco, contains St. Mark’s Basilica, which is tiled
              with Byzantine mosaics, and the Campanile bell tower offering
              views of the city’s red roofs.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="s-item" interval={3000}>
          <img className="s-img" src={Caraibe} alt="Caraibe" />
          <Carousel.Caption className="s-caption">
            <h3>CARAIBBEAN</h3>
            <p>
              The Caribbean is a subregion of the Americas that includes the
              Caribbean Sea and its islands, some of which are surrounded by the
              Caribbean Sea and some of which border both the Caribbean Sea and
              the North Atlantic Ocean; the nearby coastal areas on the mainland
              are sometimes also included in the region.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="s-item" interval={3000}>
          <img className="s-img" src={Antartica} alt="Antartica" />
          <Carousel.Caption className="s-caption">
            <h3>ANTARTICA</h3>
            <p>
              Antarctica, the southernmost continent and site of the South Pole,
              is a virtually uninhabited, ice-covered landmass. Most cruises to
              the continent visit the Antarctic Peninsula, which stretches
              toward South America. It’s known for the Lemaire Channel and
              Paradise Harbor, striking, iceberg-flanked passageways, and Port
              Lockroy, a former British research station turned museum. The
              peninsula’s isolated terrain also shelters rich wildlife,
              including many penguins.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="s-item" interval={3000}>
          <img className="s-img" src={Fiord} alt="Fiord" />
          <Carousel.Caption className="s-caption">
            <h3>NORWEGIAN FJORDS</h3>
            <p>
              In physical geography, a fjord or fiord is a long, narrow sea
              inlet with steep sides or cliffs, created by a glacier. Fjords
              exist on the coasts of Antarctica, the Arctic, and surrounded
              landmasses of the northern and southern hemispheres.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="s-item" interval={3000}>
          <img className="s-img" src={Mexico} alt="Mexico" />
          <Carousel.Caption className="s-caption">
            <h3>MEXICO</h3>
            <p>
              Mexico, officially the United Mexican States, is a country in the
              southern portion of North America. It covers 1,972,550 km², making
              it the world's 13th-largest country by area; with a population of
              almost 130 million, it is the 10th-most-populous country and the
              most populous Spanish-speaking country.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="s-item" interval={3000}>
          <img className="s-img" src={Bahamas} alt="Bahamas" />
          <Carousel.Caption className="s-caption">
            <h3>BAHAMAS</h3>
            <p>
              The Bahamas, officially the Commonwealth of The Bahamas, is a
              country in North America. It is an island country within the
              Lucayan Archipelago of the West Indies in the Atlantic Ocean. It
              contains 97% of the Lucayan Archipelago's land area and 88% of its
              population.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="s-item" interval={3000}>
          <img className="s-img" src={Portugal} alt="Portugal" />
          <Carousel.Caption className="s-caption">
            <h3>PORTUGAL</h3>
            <p>
              Portugal is a southern European country on the Iberian Peninsula,
              bordering Spain. Its location on the Atlantic Ocean has influenced
              many aspects of its culture: salt cod and grilled sardines are
              national dishes, the Algarve's beaches are a major destination and
              much of the nation’s architecture dates to the 1500s–1800s, when
              Portugal had a powerful maritime empire
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="s-item" interval={3000}>
          <img className="s-img" src={Turkey} alt="Turkey" />
          <Carousel.Caption className="s-caption">
            <h3>TURKEY</h3>
            <p>
              Turkey, country that occupies a unique geographic position, lying
              partly in Asia and partly in Europe. Throughout its history it has
              acted as both a barrier and a bridge between the two continents.
              Turkey is situated at the crossroads of the Balkans, Caucasus,
              Middle East, and eastern Mediterranean.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="s-item" interval={3000}>
          <img className="s-img" src={Portofino} alt="Portofino" />
          <Carousel.Caption className="s-caption">
            <h3>PORTOFINO</h3>
            <p>
              Portofino is a fishing village on the Italian Riviera coastline,
              southeast of Genoa city. Pastel-colored houses, high-end boutiques
              and seafood restaurants fringe its Piazzetta, a small cobbled
              square overlooking the harbor, which is lined with super-yachts. A
              path leads from the Piazzetta to Castello Brown, a 16th-century
              fortress and museum with art exhibitions and panoramic views of
              the town and the Ligurian Sea.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
