import React, { useState } from 'react';
import './TourBookingForm.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TourBookingForm = () => {
  const [departureCity, setDepartureCity] = useState('Lahore');
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const packagePrice = 1000; // Define the package price here
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle payment
  const handlePayment = () => {
    // Code for payment handling goes here
    alert('Payment successful! You will be notified about the tour details.');
    // Redirect back to the tour page
    navigate('/tours'); // Use navigate instead of history.push
  };

  // Function to calculate departure date
  const calculateDepartureDate = () => {
    const today = new Date();
    const departureDate = new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000);
    return departureDate.toISOString().split('T')[0];
  };

  const departureDate = calculateDepartureDate();

  return (
    <div className="tour-booking-form">
      <h2>Tour Booking</h2>
      <form>
        <div className="form-group">
          <label htmlFor="departureCity">Departure City:</label>
          <select
            id="departureCity"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          >
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date:</label>
          <input type="text" id="departureDate" value={departureDate} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPersons">Number of Persons:</label>
          <input
            type="number"
            id="numberOfPersons"
            value={numberOfPersons}
            onChange={(e) => setNumberOfPersons(parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <p>Total Price: $ {numberOfPersons * packagePrice}</p>
        </div>
        <button type="button" onClick={handlePayment}>Pay Now</button>
      </form>
    </div>
  );
};

export default TourBookingForm;
