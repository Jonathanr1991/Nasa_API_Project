import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import PicOfTheDay from "./components/PicOfTheDay"
function App() {
  return (

    
    <Router>
    <div className="container">
      <Navbar/>
      <PicOfTheDay/>
     
    </div>

  </Router>
  );
}

export default App;
