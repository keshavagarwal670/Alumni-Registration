// Main.js

import React, { useState } from 'react';
import Header from '../components/Header';
import LoginForm from './LoginForm';
import Search from './Search';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Update the state to indicate that the user is logged in
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Header />
      <main>
        {isLoggedIn ? (
          // Render the ContactEducationExperienceForm when the user is logged in
          <Search />
        ) : (
          // Pass the handleLogin function directly to the LoginForm
          <LoginForm handleLogin={handleLogin} />
        )}
      </main>
      {/* Add other components or content as needed */}
    </div>
  );
};

export default Main;
