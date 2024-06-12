import "./Home.css";
import { Welcome, Promotext, Slider, Text } from "../exportFiles";

function LandingPage() {
  return (
    <div className="Components">
      <div className="main-top">
        <h1 className="main-h">Sail to your next big Adventure!</h1>
        <div className="animated-text">
          <div className="main-p">Explore the mystery of Caribbean</div>
          <div className="main-p">
            Ever wonder what the Mediterranean Sea has to offer?
          </div>
          <div className="main-p">
            Asia, a continent that you'll never get tired of...
          </div>

          <div className="main-p">
            Navigate in the Baltic Sea and discover its hidden gems
          </div>
          <div className="main-p">
            Put your heavy coat on, we are going to Antarctica!
          </div>
          <div className="main-p">
            Or pack a swimsuit and let's go surfing in Hawaii!
          </div>
          <div className="main-p">
            In Italy, "la dolce vita" is not just a saying, it's a way of life
          </div>
          <div className="main-p">
            Immerse yourself in the vibrant culture and traditions of modern-day
            Egypt
          </div>
          <div className="main-p">
            Or pack a swimsuit and let's go surfing in Hawaii!
          </div>
        </div>
      </div>
      <Welcome />
      <Promotext />
      <Slider />
      <Text />
    </div>
  );
}
export default LandingPage;
