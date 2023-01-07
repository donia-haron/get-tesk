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

function Qa() {
    const [isReject, setIsReject] = useState(false);
    const [isC, setIsC] = useState(false);
    const options = [
      'Your info contain error', 'Your info may contain error'
    ];
  
    const defaultOption = options[0];  
    
    
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
  return <div className="reg2">
<p>QA <img src={require('./medal.png')} class="icon3"/></p>
<div className="bg mt-4 ">
<table class="table">
  <thead>
    <tr>
      <th scope="col">QA Fields</th>
      <th scope="col">Field Name1</th>
      <th scope="col">Field Name2</th>
      <th scope="col">Status</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FullName</th>
      <td>Moahamed yasser</td>
      <td>Moahamed yasser</td>
      <td>    
         <img class="icon3" src={require('./check.png')}/></td>
    </tr>
    <tr>
      <th scope="row">Service Type</th>
      <td>Normal</td>
      <td>Normal</td>
      <td>   <img class="icon3" src={require('./check.png')}/></td>
    </tr>
    <tr>
      <th scope="row">Passport Type</th>
      <td>Official</td>
      <td>Official</td>
      <td>   <img class="icon3" src={require('./check.png')}/></td>
    </tr>
    <tr>
      <th scope="row">Address</th>
      <td>Cairo</td>
      <td>Cairo</td>
      <td>   <img class="icon3" src={require('./check.png')}/></td>
    </tr>
    <tr>
      <th scope="row">Mobile Number</th>
      <td>+201148000512</td>
      <td>+201148000512</td>
      <td>   
        <img class="icon3" src={require('./check.png')}/></td>
    </tr>
  </tbody>
</table>

<div class="container">
  <div class="row">
    <div class="col text-center">
  
 <button type="button" class="btn btn-outline-danger col-md-2 m-2">Reject</button>
<button type="button" class="btn btn-primary col-md-2 m-2" onClick={togglePopup2} >Approve</button>

 
  
    </div>
  </div>
</div>
<div className="pops">
{isC && <Popup 
class="pops"
      content={<>
      <div class="row">
      <div class="card rounded shadow-sm p-3 mb-5 bg-white m-5" style={{"width": "40rem"}}>
  <div class="card-body">
    <div class="card-title">Application is Deliverable</div>
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
    <h5 class="card-title text-success">Delivery Passport Method</h5>

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

<div class="container">
  <div class="row mt-4">
    <div class="col text-center">
  
 <button type="button" class="btn btn-outline-danger col-md-6" onClick={togglePopup2} >Cancel</button>
<button type="button" class="btn btn-primary col-md-6" onClick={togglePop} >Save</button>

 
  
    </div>
  </div>
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

export default Qa;

