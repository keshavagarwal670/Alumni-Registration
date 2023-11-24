// Main.js

import React, { useState } from 'react';
import Contact from './Contact';

const Main = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleSearchClick = () => {
    // Add your search logic here
    // For simplicity, just toggling the showContactForm state
    setShowContactForm(!showContactForm);
  };

  return (
    <div>
      <div>
        {!showContactForm && (
          <div className="login-form-container">
          <h2 className="login-heading">Search</h2>
          <form className="form" >
            <label className="form-label">
              User Name : 
              <input
                className="form-input"
                type="text"
                
                placeholder="Enter your username"
              />
            </label>
            <label className="form-label">
              Roll No. :
              <input
                className="form-input"
                type="password"
                
                placeholder="Enter your password"
              />
            </label>
            <button className="form-button" type="submit" onClick={handleSearchClick}>
              Search
            </button>
          </form>
        </div>
        )}

        {showContactForm && <Contact />}
      </div>
    </div>
  );
};

export default Main;
