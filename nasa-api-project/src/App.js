import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import PicOfTheDay from "./components/PicOfTheDay";
export default class App extends Component {
  state = {
    apod: false,
    apod_picture: "",
  };


  setAPODPicture(e){
    this.setState({apod_picture: e});

  }

  setAPOD(){
    this.setState({apod: true})
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar data={this.state} set_APOD_Picture={this.setAPODPicture.bind(this)} setAPOD={this.setAPOD.bind(this)}/>
          <PicOfTheDay data={this.state} set_APOD_Picture={this.setAPODPicture.bind(this)}/>
        </div>
      </Router>
    );
  }
}
