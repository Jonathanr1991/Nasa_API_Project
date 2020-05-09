import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import PicOfTheDay from "./components/PicOfTheDay";
import HomePage from "./components/homePage";
import Distance from "./components/distance";
export default class App extends Component {
  state = {
    apod: false,
    home: true,
    search: false,
    distance: false,
    apod_picture: "",
    searched_pictures: [],
  };
  setSearchedPictures(e) {
    this.setState({ searched_pictures: e });
  }

  setAPODPicture(e) {
    this.setState({ apod_picture: e });
  }
  setSearch() {
    this.setState({ apod: false, home: false, search: true, distance: false });
  }
  setDistance() {
    this.setState({ apod: false, home: false, search: false, distance: true });
  }

  setAPOD() {
    this.setState({ apod: true, home: false, search: false, distance: false });
  }
  setHomePage() {
    this.setState({ apod: false, home: true, search: false, distance: false });
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar
            data={this.state}
            set_APOD_Picture={this.setAPODPicture.bind(this)}
            setAPOD={this.setAPOD.bind(this)}
            setHomePage={this.setHomePage.bind(this)}
            setSearchedPictures={this.setSearchedPictures.bind(this)}
            setDistance={this.setDistance.bind(this)}
          />
          <HomePage data={this.state} />
          <PicOfTheDay
            data={this.state}
            set_APOD_Picture={this.setAPODPicture.bind(this)}
          />
        </div>
        <Distance data={this.state} />
      </Router>
    );
  }
}
