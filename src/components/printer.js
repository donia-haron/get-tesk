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
  FaPrint,
  FaPlusCircle
} from "react-icons/fa";
import Lottie from "react-lottie";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Popup from './Popup2';

function Printer() {
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
const [tabIndex, setTabIndex] = useState(0);
const [isOpen, setIsOpen] = useState(false);

  const doThat = async () => {
setIsOpen(!isOpen);
   
    setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  };

 
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return <div className="reg1">
<p>Printer <FaPrint/></p>
<Tabs  value={tabIndex} onChange={handleTabChange} >
      <TabList className="mt--10 xx">
        <Tab>Printer</Tab>
        <Tab>View Printers</Tab>
      </TabList>
      <TabPanel>
    


<div className="bg mt-4 ">
Infromation Data
<form>
  <div class="form-row mt-4">
    <div class="form-group col-md-4">
      <label for="inputEmail4">Full Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Mohamed yasser"/>
    </div>
      <div class="form-group col-md-4">
      <label for="inputEmail4">Passport Type</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Official"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4">Service Type</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Normal"/>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-4">
      <label for="inputPassword4">Mobile Number</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="+20 - 114800512"/>
    </div>
    <div class="form-group col-md-4">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group col-md-1">
      <label for="inputState">Service Type</label>
      <select id="inputState" class="form-control">
        <option selected>11</option>
       
      </select>
    </div>
    <div class="form-group col-md-1">
    <label for="inputState">         .     </label>
      <select id="inputState" class="form-control">
        <option selected>05</option>
       
      </select>
    </div>
   
    <div class="form-group col-md-1">
    <label for="inputState"> .  </label>
      <select id="inputState" class="form-control">
        <option selected>1997</option>
     
      </select>
    
    
    
    </div>
     
    <button type="button" class="btn btn-primary col-md-2 xx" onClick={doThat}>Print</button>


    </div>
 
</form>


<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
  </div>
  </TabPanel>
      <TabPanel>
      <img className="" src={require('./printer.png')} />
      <img className="" src={require('./printer.png')} />
      <img className="" src={require('./printer.png')} />
   
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>




      </TabPanel>
    </Tabs>
    {isOpen && <Popup 
class="pops"
      content={<>
      <div class="row">
      <div class="card rounded shadow-sm p-3 mb-5 bg-white m-5" style={{"width": "40rem"}}>

  <div class="card-body">
    <h2>Application is Printing</h2>
  <img src={require('./true.gif')} class="icon"/>

  </div>
</div>
</div>
      </>}
   
    />}
 
</div>


  
}

export default Printer;
