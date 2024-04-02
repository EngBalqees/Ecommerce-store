// SendCodeOverlay.js
import React, { useState } from 'react';
import "./sendcode.css";
import axios from 'axios';

const SendCodeOverlay = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [verificationcode, setVerificationcode] = useState('');
  const [newPassword, setNewPasswordd] = useState('');
  const [step, setstep] = useState(1);


  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${import.meta.env.VITE_API}/auth/sendcode`,{email});
      if (response.status == 200) {
        setstep(2);
        console.log(response);
      }
    } catch (error) {
      console.log("Error Sending reset request:", error);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${import.meta.env.VITE_API}/auth/forgotPassword`, { email ,verificationCode, newPassword});
      if (response.status === 200) {
        // Password reset successful, redirect or show success message
        console.log(response);
      }
    } catch (error) {
      console.error('Error verifying code and setting new password:', error);
    }
  }
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button onClick={onClose} className='close'>X</button>
        <h2>Send Verification Code</h2>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isVisible && (
            <div className="newPass">
               <input
                type="text"
                placeholder="Enter the code"
                value={verificationcode}
              />
              <input
                type="passowrd"
                placeholder="Enter new Password"
                value={newPassword}
              />
              <input
                type="passowrd"
                placeholder="confirm password"
                value={newPassword}
              />
              <button type ="submit" onClick={handleVerificationSubmit}>Set New Password</button>
            </div>
          )}
          <button type="submit" onClick={toggleVisibility}>Send Code</button>

        </form>

      </div>
    </div>
  );
};

export default SendCodeOverlay;
