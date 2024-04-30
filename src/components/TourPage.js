import React, { useState } from 'react';
import './TourPage.css'; // Import CSS file for styling
import TourBookingForm from './TourBookingForm';
import { Link } from 'react-router-dom';

// Import images for Tour 1, Tour 2, and Tour 3
import tour1Image from './Images/tour1.jpg';
import tour2Image from './Images/tour2.jpg';
import tour3Image from './Images/tour3.jpg';

const TourPage = () => {
  // State to track whether tour details are shown or hidden
  const [showDetails, setShowDetails] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false); // State to track booking form visibility

  // Function to toggle the visibility of tour details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Function to handle "Book Now" button click
  const handleBookNowClick = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="container">
      {/* Tour 1 */}
      <div className="tour-package">
        <img src={tour1Image} alt="Tour 1" />
        <div className="tour-details">
          <h2>Tour 1</h2>
          {showDetails && (
            <p>Brief description of Tour 1.</p>
          )}
          <p>Price: $1000</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 2 */}
      <div className="tour-package">
        <img src={tour2Image} alt="Tour 2" />
        <div className="tour-details">
          <h2>Tour 2</h2>
          {showDetails && (
            <p>Brief description of Tour 2.</p>
          )}
          <p>Price: $1200</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 3 */}
      <div className="tour-package">
        <img src={tour3Image} alt="Tour 3" />
        <div className="tour-details">
          <h2>Tour 3</h2>
          {showDetails && (
            <p>Brief description of Tour 3.</p>
          )}
          <p>Price: $800</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

       {/* Tour 1 */}
       <div className="tour-package">
        <img src={tour1Image} alt="Tour 1" />
        <div className="tour-details">
          <h2>Tour 1</h2>
          {showDetails && (
            <p>Brief description of Tour 1.</p>
          )}
          <p>Price: $1000</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 2 */}
      <div className="tour-package">
        <img src={tour2Image} alt="Tour 2" />
        <div className="tour-details">
          <h2>Tour 2</h2>
          {showDetails && (
            <p>Brief description of Tour 2.</p>
          )}
          <p>Price: $1200</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 3 */}
      <div className="tour-package">
        <img src={tour3Image} alt="Tour 3" />
        <div className="tour-details">
          <h2>Tour 3</h2>
          {showDetails && (
            <p>Brief description of Tour 3.</p>
          )}
          <p>Price: $800</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

       {/* Tour 1 */}
      <div className="tour-package">
        <img src={tour1Image} alt="Tour 1" />
        <div className="tour-details">
          <h2>Tour 1</h2>
          {showDetails && (
            <p>Brief description of Tour 1.</p>
          )}
          <p>Price: $1000</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 2 */}
      <div className="tour-package">
        <img src={tour2Image} alt="Tour 2" />
        <div className="tour-details">
          <h2>Tour 2</h2>
          {showDetails && (
            <p>Brief description of Tour 2.</p>
          )}
          <p>Price: $1200</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 3 */}
      <div className="tour-package">
        <img src={tour3Image} alt="Tour 3" />
        <div className="tour-details">
          <h2>Tour 3</h2>
          {showDetails && (
            <p>Brief description of Tour 3.</p>
          )}
          <p>Price: $800</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

 {/* Tour 1 */}
 <div className="tour-package">
        <img src={tour1Image} alt="Tour 1" />
        <div className="tour-details">
          <h2>Tour 1</h2>
          {showDetails && (
            <p>Brief description of Tour 1.</p>
          )}
          <p>Price: $1000</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 2 */}
      <div className="tour-package">
        <img src={tour2Image} alt="Tour 2" />
        <div className="tour-details">
          <h2>Tour 2</h2>
          {showDetails && (
            <p>Brief description of Tour 2.</p>
          )}
          <p>Price: $1200</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 3 */}
      <div className="tour-package">
        <img src={tour3Image} alt="Tour 3" />
        <div className="tour-details">
          <h2>Tour 3</h2>
          {showDetails && (
            <p>Brief description of Tour 3.</p>
          )}
          <p>Price: $800</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>


 {/* Tour 1 */}
      <div className="tour-package">
        <img src={tour1Image} alt="Tour 1" />
        <div className="tour-details">
          <h2>Tour 1</h2>
          {showDetails && (
            <p>Brief description of Tour 1.</p>
          )}
          <p>Price: $1000</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 2 */}
      <div className="tour-package">
        <img src={tour2Image} alt="Tour 2" />
        <div className="tour-details">
          <h2>Tour 2</h2>
          {showDetails && (
            <p>Brief description of Tour 2.</p>
          )}
          <p>Price: $1200</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tour 3 */}
      <div className="tour-package">
        <img src={tour3Image} alt="Tour 3" />
        <div className="tour-details">
          <h2>Tour 3</h2>
          {showDetails && (
            <p>Brief description of Tour 3.</p>
          )}
          <p>Price: $800</p>
          <div className="button-container">
            <button className="button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <Link to="/booking">
              <button className="button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>



      {/* Conditional rendering of booking form */}
      {showBookingForm && <TourBookingForm />}
    </div>
  );
};

export default TourPage;
