// SignInRegister.js
import React, { useState } from 'react';
import './SignInRegister.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function SignInRegister() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="signin-register-container">
      <div className="form-container">
        <img src={logo} alt="Paddy Gate Logo" className="signin-register-logo" />
        <h2>{isSignIn ? 'Sign In' : 'Register'}</h2>

        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />

          {!isSignIn && (
            <div>
              <input type="text" placeholder="Full Name" />
              <input type="password" placeholder="Confirm Password" />
            </div>
          )}

          <button type="submit">{isSignIn ? 'Sign In' : 'Register'}</button>
        </form>

        <p className="signup-link"> {/* Added class here */}
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <Link to={isSignIn ? "/signup" : "/signin"}>
            <a>{isSignIn ? 'Register' : 'Sign In'}</a> {/* <a> tag here */}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInRegister;