import React, { Component } from "react";
import axios from "axios";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.onClickAPOD = this.onClickAPOD.bind(this);
    this.state = {
        searchText: "",
    };
  }
  handleSearchText(e){
      e.preventDefault();
      this.setState({searchText: this.target.value});

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
  onSubmit(e){
      e.preventDefault();

      axios.get("https://images-api.nasa.gov/search?q=")
  }

  render() {
    return (
        <div>
            <div className="navbar navbar-expand navbar-dark bg-dark ">
        <a className="navbar-brand">Astronomy 181</a>
        <ul className="navbar-nav nav-justified">
        
          <li className="nav-item active ">
            <a className="nav-link" href="#" onClick={this.props.setHomePage}>
              Home
            </a>
          </li>
          <li className="nav-item active col">
            <a className="nav-link" href="#" onClick={this.onClickAPOD}>
              APOD
            </a>
          </li>
          <li className="nav-item active col">
            <a className="nav-link" href="#" onClick={this.props.setDistance}>
              Distance of Objects
            </a>
          </li>
        </ul>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleSearchText}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
        </div>
      
    );
  }
}
