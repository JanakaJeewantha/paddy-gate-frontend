import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Farmer from "./Components/Pages/Farmer";
import SignIn from "./Components/Pages/SignInRegister";
import MillerPage from "./Components/Pages/miller"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/miller" element={<MillerPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;