import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import homePagePic from "../welcome_page_img.jpg"

export default class HomePage extends Component {
  constructor(props) {
    super(props);

 

    this.state = {
   
    };
  }

 

  render() {
    if (this.props.data.home) {
      return (
        <div className="conatiner mt-3">
         
         <div className="card">
            <img 
              src={homePagePic}
              className="card-img-top"
              alt={this.props.data.apod_picture.title}
            />
            <div className="card-body">
              <h5 className="card-title">
                Welcome to Astronomy 181 Semester Project
              </h5>
              <p className="card-text">
                This site allow you to access NASA Photo Library. You can navagate to the Astronomy Picture of the Day using the top navagation bar. There you will find the picture of the 
                day. Towards the bottom you will find a date selector. click on it and you can adjust the date and when you press the button a new picture will render. You can also search 
                Nasa Photo Library and view results using the search field at the top. 
              </p>
              <div className="container">
              
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