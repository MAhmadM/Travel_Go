import React from "react";
import "./Homepage.css"; // Import CSS file for styling
import backgroundImage from "./Images/background.jpg"; // Import background image

const Homepage = () => {
  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <h1>Explore the World</h1>
        <p>
          "Traveling – it leaves you speechless, then turns you into a
          storyteller." – Ibn Battuta
        </p>
        <div className="plan-trips">
          <h2>Plan Your Trips</h2>
          <div className="buttons">
            <button className="local-trip">Local Trip</button>
            <button className="international-trip">International Trip</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
