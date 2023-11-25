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
    //console.log('Contact Form Submission:', { contactName, contactEmail, contactMessage });
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
      <form onSubmit={handleContactSubmit}>
      <div className="contact-form">
        <h2>Contact Form</h2>
        
          {/* Contact Form Fields */}
          {/* ... */}
          
          <div className="col-md-6">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4"/>
          </div>
          <div className="col-md-6">
            <label  className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4"/>
          </div>
          <div className="col-12">
            <label  className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div className="col-12">
            <label  className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div className="col-md-6">
            <label  className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity"/>
          </div>
          <div className="col-md-4">
            <label  className="form-label">State</label>
            <select id="inputState" className="form-select" defaultValue="">
              <option >Choose...</option>
              <option>...</option>
            </select>
          </div>
          
          
        
        
      </div>

      <div className="education-form">
        <h2>Education Form</h2>
        
          {/* Education Form Fields */}
          {/* ... */}
                          <div className="col-md-6">
                  <label  className="form-label">Degree</label>
                  <input type="text" className="form-control" id="inputDegree" />
                </div>
                <div className="col-md-6">
                  <label  className="form-label">University</label>
                  <input type="text" className="form-control" id="inputUniversity" />
                </div>
                <div className="col-md-6">
                  <label  className="form-label">Graduation Year</label>
                  <input type="text" className="form-control" id="inputGraduationYear" />
                </div>
                <div className="col-md-6">
                  <label  className="form-label">Field of Study</label>
                  <input type="text" className="form-control" id="inputFieldOfStudy" />
                </div>
                <div className="col-12">
                  <label  className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress3" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                  <label  className="form-label">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress4" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                  <label  className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity1" />
                </div>
                <div className="col-md-4">
                  <label  className="form-label">State</label>
                  <select id="inputState1" className="form-select" defaultValue="">
                    <option >Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                
                
        
      </div>

      <div className="experience-form">
        <h2>Experience Form</h2>
        
          {/* Experience Form Fields */}
          {/* ... */}
                  <div className="col-md-6">
                    <label  className="form-label">Position</label>
                    <input type="text" className="form-control" id="inputPosition" />
                  </div>
                  <div className="col-md-6">
                    <label  className="form-label">Company</label>
                    <input type="text" className="form-control" id="inputCompany" />
                  </div>
                  <div className="col-md-6">
                    <label  className="form-label">Location</label>
                    <input type="text" className="form-control" id="inputLocation" />
                  </div>
                  <div className="col-md-6">
                    <label  className="form-label">Start Date</label>
                    <input type="date" className="form-control" id="inputStartDate" />
                  </div>
                  <div className="col-md-6">
                    <label  className="form-label">End Date</label>
                    <input type="date" className="form-control" id="inputEndDate" />
                  </div>
                  <div className="col-12">
                    <label  className="form-label">Responsibilities</label>
                    <textarea className="form-control" id="inputResponsibilities" rows="3"></textarea>
                  </div>
                  <div className="col-12">
                    <label  className="form-label">Achievements</label>
                    <textarea className="form-control" id="inputAchievements" rows="3"></textarea>
                  </div>
                  <div className="col-12">
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddres5" placeholder="1234 Main St" />
                  </div>
                  <div className="col-12">
                    <label  className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress6" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div className="col-md-6">
                    <label  className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity2" />
                  </div>
                  <div className="col-md-4">
                    <label  className="form-label">State</label>
                    <select id="inputState2" className="form-select" defaultValue="">
                      <option >Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  
        </div>
        
        <button type="submit">Submit Form</button>
        
        
      </form>
    </div>
  );
};

export default Contact;
