// ContactEducationExperienceForm.js

import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Education Form State
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  // Experience Form State
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [experienceYear, setExperienceYear] = useState('');

  // Handle Contact Form Submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submission:', { contactName, contactEmail, contactMessage });
    // Add your logic to send contact form data to the server or external service
  };

  // Handle Education Form Submission
  const handleEducationSubmit = (e) => {
    e.preventDefault();
    console.log('Education Form Submission:', { school, degree, graduationYear });
    // Add your logic to send education form data to the server or external service
  };

  // Handle Experience Form Submission
  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    console.log('Experience Form Submission:', { jobTitle, company, experienceYear });
    // Add your logic to send experience form data to the server or external service
  };

  return (
    
    <div className="forms-container">
      <div>
              <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4"/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4"/>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity"/>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip"/>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={handleContactSubmit}>
          {/* Contact Form Fields */}
          {/* ... */}
          <button type="submit">Submit Contact Form</button>
        </form>
      </div>

      <div className="education-form">
        <h2>Education Form</h2>
        <form onSubmit={handleEducationSubmit}>
          {/* Education Form Fields */}
          {/* ... */}
          <button type="submit">Submit Education Form</button>
        </form>
      </div>

      <div className="experience-form">
        <h2>Experience Form</h2>
        <form onSubmit={handleExperienceSubmit}>
          {/* Experience Form Fields */}
          {/* ... */}
          <button type="submit">Submit Experience Form</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
