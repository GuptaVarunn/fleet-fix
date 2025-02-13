import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Login from "./components/Login"; // Make sure you create this component
import Home from "./components/Home"; // Make sure you create this component
import Add from "./components/Add";

function App() {
  
  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newvehicle" element={<Add />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
