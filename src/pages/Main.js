// Main.js

import React, { useState,useEffect } from 'react';
import Header from '../components/Header';
import LoginForm from './LoginForm';
import Search from './Search';
import Notification from './Notification';
// import './notification.css'
//import login from './login'
import loginService from './login'
//import { Navbar } from 'reactstrap';

const Main = () => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ user, setUser ] = useState(null)

  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)

  // Create a notification at the top of the screen with given message for 10 seconds 
  // Notifications are of two types, "error" and "success"
  // The appearance of these two notifications can be adjusted via the index.css file
  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }

  const handleLogin = async(credentials) => {
    try {
        const userObject = await loginService.login(credentials)
        setUser(userObject)
        window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
        
        notificationHandler(`Logged in successfully as ${userObject.firstName}`, 'success')
        
      }
      catch (exception) {
        notificationHandler(`Log in failed, check username and password entered`, 'error')
      }
    // Update the state to indicate that the user is logged in
    
  };
  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser)
      setUser(JSON.parse(loggedInUser))
  }, [])

  return (
    <div>
      {/* <Header /> */}
      
      <main>
      

          
          {user === null && (
  <div className='text-center page-header p-2 regular-text-shadow regular-shadow'>
    <div className='display-4 font-weight-bold' style={{ color: '#fff', backgroundColor: 'blue', padding: '10px', borderRadius: '5px' }}>
      Academia - Payments
    </div>
  </div>
)}

          {
            /* Show Login form when no login has happened */
            user === null && 
            <LoginForm startLogin={handleLogin}/>
          }
          
          {user !== null && (
             <div>
               <Header user={user} setUser={setUser}/>
               <Search />
               
               {/* <Profile /> */}
               {/* <Notifications /> */}
               {/* Add more components as needed */}
             </div>
           )}
           <Notification notification={notification} type={notificationType} />
      </main>
      {/* Add other components or content as needed */}
    </div>
  );
};

export default Main;
