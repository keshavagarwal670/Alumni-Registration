// ContactEducationExperienceForm.js

import React, { useState, useEffect } from 'react';
import './contact.css';
import axios from 'axios';

// ... (other imports and code)

const Contact = () => {
  const [profileData, setProfileData] = useState({
    address: '',
    collegeName: '',
    degree: '',
    joiningYear: '',
    passingYear: '',
    joiningDate: '',
    leavingDate: '',
    position: '',
    organizationId: '',
    contactNumber: '',
    email: '',
  });

  const changeProfileData = (e) => {
    // console.log(name,"  ",value)
    const { name, value } = e.target;
    setProfileData(prevData => ({
        ...prevData,
        [name]: value
    }));
};

  const [organizations, setOrganizations] = useState([]);
  const accessToken = JSON.parse(localStorage.getItem('loggedInUser')).access_token;

  useEffect(() => {
    const fetchData = async () => {
      

      try {
        const response = await axios.get('/api/v1/organisations', {
          headers: {
            'access-control-allow-origin': '*',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setOrganizations(response.data);

        // Assuming the organizationId is a property in your profileData state,
        // set the default organizationId to the first organization in the list
        if (response.data.length > 0) {
          setProfileData((prevProfileData) => ({
            ...prevProfileData,
            organizationId: response.data[0].id,
          }));
        }
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Handle Contact Form Submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const studentId = localStorage.getItem('studentId');
    console.log("student id: ", studentId);
    try {
      console.log("access token " + accessToken)
      const data = {
        address: profileData.address,
        collegeName: profileData.collegeName,
        degree: profileData.degree,
        joiningYear: profileData.joiningYear,
        passingYear: profileData.passingYear,
        joiningDate: profileData.joiningDate,
        leavingDate: profileData.leavingDate,
        position: profileData.position,
        organisationId: profileData.organizationId,
        contactNumber: profileData.contactNumber,
        studentId: studentId,
        email: profileData.email
      };

      console.log("Data ", data);
      const response = await axios({
        method: 'post',
        url: `/api/v1/student/add`,
        data,
        headers: {
          "Content-Type": 'application/json',
          'Access-Control-Allow-Origin': '*',
           Authorization: `Bearer ${accessToken}`
        },
      });

      console.log('Contact Form Submitted:', response.data);

      // Add your logic for handling the response, such as showing a success message, updating state, etc.
    } catch (error) {
      console.error('Error submitting contact form:', error);

      // Handle specific error cases, if needed
    }
  };

  return (
    <div className="forms-container">
      <form onSubmit={handleContactSubmit}>
        <div className="contact-form">
          <h2>Contact Form</h2>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input name='email' type="email" className="form-control" id="inputEmail4" value={profileData.email} onChange={changeProfileData} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Contact Number</label>
            <input name='contactNumber' type="number" className="form-control" id="inputPassword4" value={profileData.contactNumber} onChange={changeProfileData} />
          </div>
          <div className="col-12">
            <label className="form-label">Address</label>
            <input name='address' type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={profileData.address} onChange={changeProfileData} />
          </div>
        </div>

        <div className="education-form">
          <h2>Education Form</h2>

          <div className="col-md-6">
            <label className="form-label">Degree</label>
            <input name='degree' type="text" className="form-control" id="inputDegree" value={profileData.degree} onChange={changeProfileData} />
          </div>
          <div className="col-md-6">
            <label className="form-label">College Name</label>
            <input name='collegeName' type="text" className="form-control" id="inputUniversity" value={profileData.collegeName} onChange={changeProfileData} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Joining Year</label>
            <input name='joiningYear' type="text" className="form-control" id="inputGraduationYear" value={profileData.joiningYear} onChange={changeProfileData} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Passing year</label>
            <input name='passingYear' type="text" className="form-control" id="inputFieldOfStudy" value={profileData.passingYear} onChange={changeProfileData} />
          </div>
        </div>

        <div className="experience-form">
          <h2>Experience Form</h2>

          <div className="col-md-6">
            <label className="form-label">Position</label>
            <input name='position' type="text" className="form-control" id="inputPosition" value={profileData.position} onChange={changeProfileData} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Start Date</label>
            <input name='joiningDate' type="date" className="form-control" id="inputStartDate" value={profileData.joiningDate} onChange={changeProfileData} />
          </div>
          <div className="col-md-6">
            <label className="form-label">End Date</label>
            <input name='leavingDate' type="date" className="form-control" id="inputEndDate" value={profileData.leavingDate} onChange={changeProfileData} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Organization</label>
            <select
              id="inputCompany"
              name='organizationId'
              className="form-control"
              value={profileData.organizationId}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  organizationId: e.target.value,
                })
              }
            >
              {organizations.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Contact;

