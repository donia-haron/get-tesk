import React, { useState,components } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Signin.css";
import sign from './sign.json';
// import the stylesheet
import "react-step-progress/dist/index.css";
import {
  FaSearch,
  FaRegCreditCard,
  FaPlusCircle
} from "react-icons/fa";
import Lottie from "react-lottie";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Popup from './Popup2';
import Popup1 from './Popup';

function Signin() {

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: sign,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const navigate = useNavigate();

      function move () {
        console.log("Ddd");
        navigate("/home");
    
      }

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
  return <div className="regg1">

<div className="bgg mt-4 ">
<img class="icon5" src={require('./logo.png')}/>
 
<div class="til">
<div>Hello Dear,</div>
<span>System Admin</span>
   
</div>

<div className="contain">

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={move}>SignIn</button>
</form>
    {/* <div class="row">
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Enter Your Password"/>
    </div>
  </div> */}
  </div>

</div>
<div className="cr">
<div className="c4">
      <Lottie 
	    options={defaultOptions2}
        height={320}
        width={320}
      />
</div>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
</div>
  </div>;
  
}

export default Signin;

