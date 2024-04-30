// Popup.js
import React from "react";
import "./Popup.css";
const Popup = ({ isOpen, onClose, message }) => {
  return (
    <div className={`popup ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="popup-inner">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
