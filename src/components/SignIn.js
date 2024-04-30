// SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import Popup from "./Popup"; // Import Popup component

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    cnic: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
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

  const handleSignInLater = () => {
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
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label>CNIC:</label>
        <input
          type="text"
          name="cnic"
          value={formData.cnic}
          onChange={handleChange}
        />
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
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <label>Contact Number:</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="submit">Sign In</button>
          <button type="button" onClick={handleSignInLater}>
            Sign In Later
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

export default SignIn;
