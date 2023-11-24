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
              <select>
                 <option value="Keshav"></option>
                 <option value="Adarsh"></option>
              </select>
            </label>
            <label className="form-label">
              Roll No. :
              <select>
                 <option value="MT2023114"></option>
                 <option value="MT2023114"></option>
              </select>
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
