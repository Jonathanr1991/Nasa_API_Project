import React, { Component } from "react";
import axios from "axios";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.onClickAPOD = this.onClickAPOD.bind(this);
    this.state = {};
  }
  onClickAPOD(e) {
    e.preventDefault();
    //gets todays atronomy picture of the day
    this.props.setAPOD();
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=VDI7LcD6V4xhR2rmcjBfsm4oeBA6RhFdtLiav8qf"
      )
      .then((res) => {
        this.props.set_APOD_Picture(res.data);
      });
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand">Astronomy 181</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#" onClick={this.onClickAPOD}>
              APOD <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}
