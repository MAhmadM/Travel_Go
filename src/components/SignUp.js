// SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import Popup from "./Popup"; // Import Popup component

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setPopupMessage(Object.values(newErrors).join("\n"));
      setPopupOpen(true);
    } else {
      // Handle successful form submission
      setPopupMessage("Form submitted successfully!");
      setErrors({});
      setPopupOpen(true);
      setTimeout(() => {
        navigate("/");
      }, 2000); // Redirect after 2 seconds (2000 milliseconds)
    }
  };

  const handleSignUpLater = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error message when user starts typing in a field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="submit">Sign Up</button>
          <button type="button" onClick={handleSignUpLater}>
            Sign Up Later
          </button>
        </div>
      </form>
      <Popup
        isOpen={popupOpen}
        onClose={handleClosePopup}
        message={popupMessage}
      />
    </div>
  );
};

export default SignUp;
