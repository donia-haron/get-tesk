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
  FaPlusCircle,
  
} from "react-icons/fa";
import Lottie from "react-lottie";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Popup from './Popup';
function Reg3() {
 

  const [isOpen, setIsOpen] = useState(false);
  function togglePopup () {
    
    setIsOpen(!isOpen);
  return true;
  }
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
<div class="col-xs-6 col-sm-6 col-md-6">
<label for="inputEmail4">ID</label>
<div class="form-row">

<div class="input-group form-floating col-md-6">


  <input type="file" class="form-control"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><img src={require('./attach.png')} className="icon3"/></span>
  </div>
</div>

 </div>
 <br/>
 <label for="inputEmail4">Photo</label>
 <div class="row">
<div class="input-group col-md-6">
  <input type="file" class="form-control"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><img src={require('./attach.png')} className="icon3"/></span>
  </div>
</div>

 </div>
 <br/>
 <label for="inputEmail4">Graduation Certificate</label>
 <div class="row">
<div class="input-group col-md-6">
  <input type="file" class="form-control"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><img src={require('./attach.png')} className="icon3"/></span>
  </div>
</div>

 </div>
</div>
<div class="col-xs-6 col-sm-6 col-md-6">
<label for="inputEmail4">Birth Certificate</label>
<div class="row">
<div class="input-group col-md-6">
  <input type="file" class="form-control"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><img src={require('./attach.png')} className="icon3"/></span>
  </div>
</div>
 </div>
<br/>
<label for="inputEmail4">Application Form</label>
 <div class="row">
<div class="input-group col-md-6">
  <input type="file" class="form-control"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><img src={require('./attach.png')} className="icon3"/></span>
  </div>
</div>

 </div>
<br/>
<label for="inputEmail4">Others</label>
 <div class="row">
<div class="input-group col-md-6">
  <input type="file" class="form-control"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><img src={require('./attach.png')} className="icon3"/></span>
  </div>
</div>

 </div>
 <div class="row mt-3 ml-1">
 <div class="d-flex justify-content-end ">
<input
class="btn btn-dark col-md-12"
type="button"
      value="Confirm"
      onClick={togglePopup}
    />
    </div>

 </div>
</div>
</div>

</form>
<div className="pop">
{isOpen && <Popup
      content={<>
      <div class="row">
      <div class="card rounded shadow-sm p-3 mb-5 bg-white m-5" style={{"width": "40rem"}}>
  <div class="card-body">
    <h5 class="card-title text-success">Application Information</h5>
    <img className="tr" src={require('./qr-code.png')}/>
        
    <p class="card-text tit"><span class="tit">Name:- </span>Moahamed</p>
    <br/>
    <p class="card-text"><span class="tit">To:-</span>Minstry Of finance-RMI</p>
    <br/>
    <p class="card-text"><span class="tit">From:- </span>GET Group -Egypt</p>
    <br/>
    <p class="card-text"><span class="tit">Category:-</span>New Passport</p>
    <br/>
    <p class="card-text"><span class="tit">Amount:- </span>2500 LE</p>
   

  </div>
</div>

<div class="card shadow-sm p-3 mb-5 bg-white rounded m-5" style={{"width": "40rem"}}>
  <div class="card-body">
  <h5 class="card-title text-success">Service Information</h5>
    <p class="card-text tit"><span class="tit">finance Reciept Number:- </span>203412358</p>
    <br/>
    <p class="card-text"><span class="tit">Date:-</span>28/8/2022</p>
    <br/>
    <p class="card-text"><span class="tit">Amount:- </span>GET Group -Egypt</p>
    <br/>
    <p class="card-text"><span class="tit">Category:-</span>2500 LE</p>
    <br/>
    <p class="card-text"><span class="tit">Signed:- </span>Mohamed</p>
  </div>
</div>
</div>
<div class="row justify-content-center">
<button type="button" class="btn btn-outline-primary col-md-4 m-5">Print</button>
<button type="button" class="btn btn-primary col-md-4 m-5" onClick={togglePopup}>Next</button>
</div>
      </>}
      handleClose={togglePopup}
    />}
    </div>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
</div>

  </div>;
  
}

export default Reg3;
