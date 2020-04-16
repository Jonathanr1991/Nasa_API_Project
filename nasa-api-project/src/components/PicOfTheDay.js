import React, {component, Component, useState} from 'react';
import axios from 'axios'


export default class PicOfTheDay extends Component {

    state = {
        pic: [],
        done: false
    }

    getPicture(){
        

        axios.get('https://api.nasa.gov/planetary/apod?api_key=VDI7LcD6V4xhR2rmcjBfsm4oeBA6RhFdtLiav8qf')
        .then(res => {
            console.log(res.data)
            this.setState({pic: res.data, done: true})
        })
    }

    render () {
        if(!this.state.done){
            return (

            
            
                <div>
                     <button onClick={this.getPicture}>get pic</button>
                     <div className="card" >
                     <img src={this.state.pic.url} className="card-img-top"/>
                     <div className="card-body">
                         <h5 className="card-title">{this.state.pic.title}</h5>
                         <p className="card-text">{this.state.pic.explanation}</p>
                         <a href="#" className="btn btn-primary">Go somewhere</a>
                     </div>
                     </div>
     
                     
     
                </div>
             );
        }
       
    }
}