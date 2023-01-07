import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
  FaSearch,
  FaFilter,
  FaPlusCircle,

} from "react-icons/fa";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navx">
        <ul >
         
          <li>
          <img src={require('./logo.png')}/>
          </li>
          
        
        <li>
       
        <div class="wrap">
   <div class="search">
      
   <input
      type="text" className="searchTerm" placeholder="What are you looking for?"
  />

      <button type="submit" className="searchButton">
      <FaSearch/>
     </button>
   </div>
</div>
        </li>
         
        <li>
        <img className="icon2" src={require('./settings.png')}/>
          </li>
     
          <li>
        <img className="icon2" src={require('./notification.png')}/>
          </li>
          <li>
          <button type="submit" className="btn btn-1">
Logout
 </button>
          </li>
        </ul>
      </nav>
    );
  }
}
