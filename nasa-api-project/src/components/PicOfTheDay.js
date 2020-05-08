import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class PicOfTheDay extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pic: [],
      date: new Date(),
    };
  }

  handleChangedate = (NewDate) => {
    this.setState({ date: NewDate });
  };
  onSubmit(e) {
    e.preventDefault();

    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=VDI7LcD6V4xhR2rmcjBfsm4oeBA6RhFdtLiav8qf&date=" +
          this.state.date.getFullYear() +
          "-" +
          this.state.date.getMonth() +
          "-" +
          this.state.date.getDate()
      )
      .then((res) => {
        this.props.set_APOD_Picture(res.data);
      });
  }

  render() {
    if (this.props.data.apod) {
      return (
        <div>
          <div className="card">
            <img 
              src={this.props.data.apod_picture.url}
              className="card-img-top"
              alt={this.props.data.apod_picture.title}
            />
            <div className="card-body">
              <h5 className="card-title">
                {this.props.data.apod_picture.title}
              </h5>
              <p className="card-text">
                {this.props.data.apod_picture.explanation}
              </p>
              <div className="container">
              <form onSubmit={this.onSubmit}>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.handleChangedate}
                />
                <button type="submit" className="btn btn-primary">
                  Change Date
                </button>
              </form>
              </div>
             
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
