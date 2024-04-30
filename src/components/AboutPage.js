// AboutPage.js
import React from "react";
import "./AboutPage.css";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import owner1 from "./Images/owner1.jpg";
import owner2 from "./Images/owner2.jpg";
import owner3 from "./Images/owner3.jpg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="background-images">
        <img src={image1} alt="Background Image 1" />
        <img src={image2} alt="Background Image 2" />
        <img src={image3} alt="Background Image 3" />
      </div>
      <div className="content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum ante at ligula rutrum, eget porta magna laoreet. Nam
          feugiat arcu at velit sagittis, in gravida lorem molestie.
        </p>
        {/* Owner cards */}
        <div className="owner-cards">
          {/* Owner card 1 */}
          <div className="owner-card">
            <img src={owner1} alt="Owner 1" />
            <h3>John Doe</h3>
            <p>Age: 30</p>
            <p>Email: john@example.com</p>
          </div>
          {/* Owner card 2 */}
          <div className="owner-card">
            <img src={owner2} alt="Owner 2" />
            <h3>Jane Doe</h3>
            <p>Age: 28</p>
            <p>Email: jane@example.com</p>
          </div>
          {/* Owner card 3 */}
          <div className="owner-card">
            <img src={owner3} alt="Owner 3" />
            <h3>Michael Smith</h3>
            <p>Age: 35</p>
            <p>Email: michael@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
