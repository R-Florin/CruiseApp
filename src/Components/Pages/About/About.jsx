import React from "react";
import "./About.css";
import WelcomeAB from "./WelcomeAB/WelcomeAB";
import { Text } from "../../exportFiles";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-info">
          <h1>About Us</h1>
          <h5>
            <i>Envision, Book, Adventure!</i>
          </h5>
          <h2>
            <i>9NineCruiseS</i>
          </h2>
          <p>
            Welcome to{" "}
            <span>
              <i>9NineCruiseS</i>
            </span>{" "}
            – the travel agency that turns your journeys into memorable
            experiences! In a world full of travel opportunities, choosing the
            right agency can make the difference between an ordinary vacation
            and an extraordinary one. That’s why our agency focuses on providing
            unique and personalized experiences that meet the needs and
            preferences of every traveler.
          </p>
          <p>
            Whether you want to explore the most beautiful cities in the world,
            go on expeditions, or relax on the most spectacular beaches, we are
            here to offer you the best recommendations and create an itinerary
            tailored to your interests.
          </p>
          <p>
            In our agency, luxury is defined by authentic and personalized
            experiences that perfectly match the needs and preferences of each
            traveler. We believe that every vacation should be special, which is
            why we offer a wide range of luxury experiences – from top resorts
            and luxury hotels to customized tours and activities. We want you to
            enjoy every moment and experience the most authentic and exclusive
            tourist attractions.
          </p>
          <p>
            At{" "}
            <span>
              <i>9NineCruiseS</i>
            </span>
            , we are ready to offer you specialized consultancy to help you
            realize your boldest travel dreams. Let our team take care of all
            the details so that you can focus solely on enjoying your dream
            vacation. Join our community of discerning travelers and experience
            the most beautiful moments of your life with us!
          </p>
        </div>
      </div>
      <WelcomeAB />
      <Text />
    </>
  );
}

export default About;
