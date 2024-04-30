import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import TourPage from "./components/TourPage";
import BookingPage from "./components/BookingPage"; // Import the BookingPage component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tours" element={<TourPage />} />
          <Route path="/booking" element={<BookingPage />} /> {/* Add BookingPage route */}
        </Routes>
        <TourPage />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
