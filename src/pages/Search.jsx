// Main.js

import React, { useState } from 'react';
import Contact from './Contact';
import './search.css'

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
             <select defaultValue="" >
               <option value="" disabled hidden>Select Your Name</option>
               <option value="Keshav">Keshav</option>
               <option value="Adarsh">Adarsh</option>
             </select>
           </label>

            <label className="form-label">
              Roll No. :
              <select defaultValue="">
              <option value="" disabled hidden>Select Your Roll</option>
                    <option value="MT2023112">MT2023112</option>
                    <option value="MT2023113">MT2023113</option>
                    <option value="MT2023114">MT2023114</option>
                    <option value="NONE">NONE</option>
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
