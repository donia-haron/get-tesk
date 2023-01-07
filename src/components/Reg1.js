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
  FaPlusCircle
} from "react-icons/fa";
import Lottie from "react-lottie";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Reg1() {
  const options = [
    'Official', 'Unofficial'
  ];
  const options2 = [
    'Normal', 'Unnormal'
  ];
  const defaultOption = options[0];  
  const defaultOption2 = options2[0];  
  return <div className="reg1">
<p>Registration <FaUser/></p>
<div className="bg">

Request Information
<br/>
<div className="group">
<div className="Dropdown">
  <label>Password Type</label>
<Dropdown  options={options}  value={defaultOption} placeholder="Select Passowrd Type" />
</div>
<div className="Dropdown">
  <label>Service Type</label>
<Dropdown  options={options2}  value={defaultOption2} placeholder="Select an option" />;
</div>
</div>
</div>
  </div>;
}

export default Reg1;
