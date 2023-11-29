// // Search.js

// import React, { useState } from 'react';
// import Contact from './Contact';
// import './search.css';

// const Search = () => {
//   const [selectedUserName, setSelectedUserName] = useState('');
//   const [selectedgradyear, setSelectedgradyear] = useState('');
//   const [showContactForm, setShowContactForm] = useState(false);

//   const handleSearchClick = () => {
//     // Add your validation logic here
//     if (!selectedUserName || !selectedgradyear) {
//       alert('Please select both User Name and Roll No.');
//       return;
//     }

//     // If validation passes, proceed to toggle the showContactForm state
//     setShowContactForm(!showContactForm);
//   };

//   return (
//     <div>
//       <div>
//         {!showContactForm && (
//           <div className="login-form-container">
//             <h2 className="login-heading">Search</h2>
//             <form className="form">
//               <label className="form-label">
//                 User Name:
//                 <select
//                   value={selectedUserName}
//                   onChange={(e) => setSelectedUserName(e.target.value)}
//                 >
//                   <option value="" disabled hidden>
//                     Select Your Name
//                   </option>
//                   <option value="Keshav">Keshav</option>
//                   <option value="Adarsh">Adarsh</option>
//                 </select>
//               </label>

//               <label className="form-label">
//                 Graduation Year.:
//                 <select
//                   value={selectedgradyear}
//                   onChange={(e) => setSelectedgradyear(e.target.value)}
//                 >
//                   <option value="" disabled hidden>
//                     Select Your Graduation Year
//                   </option>
//                   <option value="MT2023112">MT2023112</option>
//                   <option value="MT2023113">MT2023113</option>
//                   <option value="MT2023114">MT2023114</option>
//                   <option value="NONE">NONE</option>
//                 </select>
//               </label>
//               <button
//                 className="form-button"
//                 type="button" // Change to type="button" to prevent form submission
//                 onClick={handleSearchClick}
//               >
//                 Search
//               </button>
//             </form>
//           </div>
//         )}

//         {showContactForm && <Contact />}
//       </div>
//     </div>
//   );
// };

// export default Search;







import React, { useState } from 'react';
import Contact from './Contact';
import './search.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [grad_year, setGYear] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [alumniData, setAlumniData] = useState([]);
  const [show, setShow] = useState(false);
  const [noRecord, setNoRecord] = useState(false);
  const [propertyVal, setPropertyVal] = useState(1);
  const [register, setRegister] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  //const [uml, showUML] = useState(false);
  //const navigate = useNavigate();

  const handleChangeGYear = (event) => {
    setGYear(event.target.value);
  };

  const handleChangeFName = (event) => {
    setFname(event.target.value);
  };

  const handleChangeLName = (event) => {
    setLname(event.target.value);
  };

  const getAlumniDetails = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('loggedInUser')).access_token;
      console.log("token: " + token);
  
      const response = await axios.get(`/api/v1/student/search?graduationYear=${grad_year}&name=${fname}`, {
        headers: {
          "access-control-allow-origin": "*",
          Authorization: `Bearer ${token}`
        }
      });
      let arr = []
      console.log("Alumni Data: ","response: ", response.data.length);
      for (let i = 0; i < response.data.length; i++) {
        // console.log("Inside Loop ",response.data[i]);
        arr.push(response.data[i]);
      }
  
      const data = response.data[0];
      setAlumniData(arr);
      console.log("response: ",data);
      if (alumniData && arr.length !== 0) {
        console.log("record exist status",noRecord);
        
        setNoRecord(false);
        setShow(true);
      } else {
        setNoRecord(true);
        console.log("No record Exist status",noRecord);
        console.log("Alu Data",alumniData)
      }
    }catch (error) {
      console.error('Error fetching data:', error.message);
      // Handle specific error cases, if needed
    }
  };
  

  const handleRegister = (student_id) => {
    setRegister(true);
    setShow(false);
    setNoRecord(false);
    setPropertyVal(student_id);
    // You can navigate to the Contact component or any other page as needed
    //navigate(`/contact/${student_id}`);
    setShowContactForm(!showContactForm);
    window.localStorage.setItem('studentId', student_id);
  };

  // const toggleUML = () => {
    // showUML((prevUML) => !prevUML);
  // };

  return (
    <div>
      {!showContactForm && (
      <Form className="main_form">
        <Form.Group className="mb-3" controlid="g_year">
          <Form.Label>Graduation Year</Form.Label>
          <Form.Control type="number" placeholder="Enter Graduation Year" onChange={handleChangeGYear} value={grad_year} />
          <Form.Text className="text-muted custom-text">Thank you for being a part of IIITB Fam..!</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlid="fname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" onChange={handleChangeFName} value={fname} />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlid="lname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" onChange={handleChangeLName} value={lname} />
        </Form.Group> */}

        <Button className="mb-3" controlid="search_button" variant="primary" onClick={getAlumniDetails}>
          Search
        </Button>
        <br />

        {noRecord ? (
          <Form.Text className="text-muted">Sorry no record found in IIITB's Database please try again..!</Form.Text>
        ) : null}
      </Form>
      )}
      {showContactForm && <Contact />}

      {show && alumniData.length !== 0 ? (
        <table className="alumniSearch">
          <thead>
            <tr>
              <th>NAME</th>
              <th>STUDENT ID</th>
              <th>GRADUATION YEAR</th>
              <th>ROLL NUMBER</th>
              
            </tr>
          </thead>
          <tbody>
            {alumniData.map((alumni) => (
              <tr key={alumni.student_id}>
                <td>{alumni.name}</td>
                <td> {alumni.student_id} </td>
                <td>{alumni.graduation_year}</td>
                <td>{alumni.roll_no}</td>
                <td>
                  <Button onClick={() => handleRegister(alumni.student_id)}>CLICK</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {/* {register ? <Contact student_id={propertyVal} /> : null} */}

      {/* <Button className="mb-3" controlId="search_button" variant="primary" onClick={toggleUML}> */}
        {/* Click here to see/hide UML Diagram */}
      {/* </Button> */}
      {/* <br /> */}
      {/* {uml ? <img src={umlDiagram} alt="uml diagram" /> : null} */}
      
    </div>
  );
}

export default Search;
