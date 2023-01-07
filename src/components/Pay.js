import React, { useState } from "react";
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

function Pay() {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: payment,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
  return <div className="reg1">
<p>Payment & Review <FaRegCreditCard/></p>
<div className="bg mt-4 ">
Attach Your reciept

<div class="row justify-content-start">
<div class="col-xs-6 col-sm-6 col-md-6 mt-4">

<label for="inputEmail4" class="text-secondary">Attach reciept stamped or signed</label>
 <div class="row mt-2">
<div class="input-group col-md-6">
  <input type="file" class="form-control"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><img src={require('./attach.png')} className="icon3"/></span>
  </div>
</div>


</div>
</div>
<div className="icon4">
      <Lottie 
	    options={defaultOptions2}
        height={220}
        width={220}
      />
</div>
</div>



    </div>
<br/>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
  </div>;
}

export default Pay;
