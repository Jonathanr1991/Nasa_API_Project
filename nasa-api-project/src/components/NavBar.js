import React, {component, Component} from 'react';
import axios from 'axios'


export default class NavBar extends Component {
    render () {
        return (

            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Astronomy 181</a>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                </ul>
                    <form className="form-inline">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                </nav>
        );
    }
}
