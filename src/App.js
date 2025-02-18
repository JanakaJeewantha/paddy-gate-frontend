import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Farmer from "./Components/Pages/Farmer";
import SignIn from "./Components/Pages/SignInRegister";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Add other routes for Miller and About Us here */}
      </Routes>
    </Router>
  );
};

export default App;