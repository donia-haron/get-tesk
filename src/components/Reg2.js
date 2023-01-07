import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Regestration.css";
import styled from "styled-components";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";
import {
  FaSearch,
  FaUser,
  FaCamera,
  FaPlusCircle
} from "react-icons/fa";
import Lottie from "react-lottie";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Reg2() {
 
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
  return <div className="reg1">
<p>Registration <FaUser/></p>
<div className="bg">

Request Information
<br/>
<form>
<div class="row justify-content-center">
  <div class="col-xs-8 col-sm-8 col-md-8">
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputEmail4">Full Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Your Name"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4">Mother Name</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Mother Name"/>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-4">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group col-md-4">
      <label for="inputPassword4">Mobile Number</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="+20 - 114800512"/>
    </div>
    </div>
  <div class="form-row">
  
  <div class="form-group col-md-2">
      <label for="inputState">Date of Birthday</label>
      <select id="inputState" class="form-control">
        <option selected>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <div class="form-group col-md-2">
    <label for="inputState">         .     </label>
      <select id="inputState" class="form-control">
        <option selected>Jun</option>
        <option>Feb</option>
        <option>march</option>
      </select>
    </div>
   
    <div class="form-group col-md-2">
    <label for="inputState"> .  </label>
      <select id="inputState" class="form-control">
        <option selected>1997</option>
        <option>1998</option>
        <option>1999</option>
        <option>2000</option>
      </select>
    </div>
</div>
</div>
<div class="col-xs-4 col-sm-4 col-md-4">
<div class="row">
<div class="form-group col-md-2 mg">
                <div class="file-loading">
                  
          <label  for="inputState">  <img class="icon"  src={require('./profile.gif')}/>
          </label>    
                    <FaCamera className="icon2"/>
                </div>
            </div>
          
          
            <div class="form-group col-md-1 mg">
                <div class="file-loading">
                  
          <label  for="inputState">  <img class="icon"  src={require('./fp.gif')}/>
          </label>    
          <FaCamera className="icon2"/>
                </div>
            </div>
            </div>
</div>
</div>
</form>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
</div>

  </div>;
  
}

export default Reg2;
