import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import SignInRegister from './SignInRegister'; // Import the SignInRegister component

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="header-content">
            <img src={logo} alt="Paddy Gate Logo" className="logo" />
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/mills">Mills</Link></li>
                <li><Link to="/farmer-hub">Farmer Hub</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/login">Sign In</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInRegister />} /> {/* Add route for SignInRegister */}
          {/* Other routes will go here */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Paddy Gate</h1>
        <p className="tagline">Opening Doors to a Smart Rice Trade</p>
        <p className="description">Welcome to Paddy Gate... </p>
        <Link to="/signin"> {/* Wrap button with Link */}
          <button className="get-started-button">Get Started Now</button>
        </Link>
      </div>
    </div>
  );
}

export default App;