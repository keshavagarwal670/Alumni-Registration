// import useRef  from "react";

// import { Container, Row } from "reactstrap";

// import { NavLink } from 'react-router-dom';
import "./header.css";

const Header = () => {
    return (
      <header>
        <div className="container">
          <h1>Alumni Registration</h1>
          <nav>
            <ul>
              <li><a href="/">Logout</a></li>
              <li><a href="/about">About</a></li>
              
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;