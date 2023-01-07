import React, { useState,components } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Regestration.css";
import payment from './payment.json';
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

function Pay3() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReject, setIsReject] = useState(false);
 
  const [isC, setIsC] = useState(false);
  const options = [
    'Your info contain error', 'Your info may contain error'
  ];

  const defaultOption = options[0];  
    const doThat = async () => {
  setIsOpen(!isOpen);
     
      setTimeout(() => {
        setIsOpen(false);
      }, 4000);
    };
  
   
  
  function togglePopup2 () {
    
    setIsReject(!isReject);

  }
  function togglePop(){
    setIsReject(false);
    doThat2();
   
  }
  const doThat2 = async () => {
    setIsC(!isC);
       
        setTimeout(() => {
          setIsC(false);
        }, 4000);
      };

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
  return <div className="reg1">
<p>Payment & Review <FaRegCreditCard/></p>
<div className="bg mt-4 ">
Review Application

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
<div class="row mt-2 x2">
 <button type="button" class="btn btn-outline-danger col-md-4 m-2" onClick={togglePopup2}>Reject</button>
<button type="button" class="btn btn-primary col-md-4 m-2" onClick={doThat}>Approve</button>
</div>
</div>
</div>

</form>
<div className="pops">
{isOpen && <Popup 
class="pops"
      content={<>
      <div class="row">
      <div class="card rounded shadow-sm p-3 mb-5 bg-white m-5" style={{"width": "40rem"}}>
  <div class="card-body">
  <img src={require('./true.gif')} class="icon"/>

  </div>
</div>
</div>
      </>}
   
    />}
    </div>
    <div className="pops">
{isC && <Popup 
class="pops"
      content={<>
      <div class="row">
      <div class="card rounded shadow-sm p-3 mb-5 bg-white m-5" style={{"width": "40rem"}}>
  <div class="card-body">
    <div class="card-title">Reject Reason Submited</div>
  <img src={require('./true.gif')} class="icon"/>

  </div>
</div>
</div>
      </>}
   
    />}
    </div>
    <div className="pop">
{isReject && <Popup1
      content={<>
      <div class="row" >
      <div class=" rounded shadow-sm bg-white ml-6" style={{"width": "65rem"}}>
  <div class="card-body">
    <h5 class="card-title text-success">Put Your rejection reason</h5>

<div class="card-body">
<div className="Dropdown">
  <label>Choose Your Reason</label>

<div>
<div class="row">
<div class="input-group" >
<Dropdown options={options} value={defaultOption} placeholder="Select Passowrd Type" />
</div>
</div>

<label for="inputEmail4">Others</label>
<div class="row">

      <input type="text" class="form-control" id="inputEmail4" placeholder="enter your error "/>
  
</div>
<div class="row">


<button type="button" class="btn btn-primary col-md-4 m-5" onClick={togglePop}>Submit</button>
</div>
</div>
</div>

</div>

  </div>
</div>


</div>

      </>}
   
    />}
    </div>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
</div>

  </div>;
  
}

export default Pay3;
