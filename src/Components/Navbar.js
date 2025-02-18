import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import your global CSS or adjust the path if needed.
import"./Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={require("../Components/Assets/logo.png")} alt="Logo" className="logo-img" />

      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/farmer">Farmer</Link>
        </li>
        <li>
          <Link to="/miller">Miller</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
