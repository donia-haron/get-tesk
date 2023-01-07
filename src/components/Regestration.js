import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Regestration.css";
import styled from "styled-components";

import Navbar from "./Navbar";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";
import {
  FaSearch,
  FaFilter,
  FaPlusCircle
} from "react-icons/fa";
import Lottie from "react-lottie";

import animation from './pass.json';
import payment from './payment.json';
import qa from './qa.json';
import review from './review.json';
import reg from './reg.json';
import printer from './printer.json';
import Reg1 from './Reg1';
import Reg2 from './Reg2';
import Reg3 from './Reg3';
import Pay from './Pay';
import Pay2 from './Pay2';
import Pay3 from './Pay3';
import Qa from './Qa';
import Done from './Done';
import Printer from './printer';

import { Wave, Random } from "react-animated-text";


function Regestration() {

  
    const step1Content = <Reg1/>;
    const step6Content = <Reg2/>;
    const step7Content = <Reg3/>;
    const step2Content = <Pay/>;
    const step3Content = <Pay2/>;
    const step4Content = <Pay3/>;
    const step5Content = <Printer/>;
 
    const step8Content = <Qa/>
    const step9Content = <Done/>
    // setup step validators, will be called before proceeding to the next step
    function step2Validator() {
      return true;
    } 
    function step9Validator() {
        return true;
      } 
    function step8Validator() {
        return true;
      }
    function step6Validator() {
        return true;
      }
      function step7Validator() {
      
return  true;
      }
    function step3Validator() {
      return true;
    }
    function step4Validator() {
        return true;
      }
    
      function step5Validator() {
        return true;
      }

      function onFormSubmit() {
      
 
        window.location = '/apps';
      }
  
  return <div>  <Navbar/>
  <div className="reg">
   <StepProgressBar
      startingStep={0}
      onSubmit={onFormSubmit}
      steps={[
        {
          label: "Registration",
          // subtitle: '10%',
          name: "Registration",
          content: step1Content
        },
        {
             label: '',
            // subtitle: '50%',
            name: "",
            content: step6Content,
            validator: step6Validator
          },
          {
            // label: 'Step 2',
            // subtitle: '50%',
            name: "",
            content: step7Content,
            validator: step7Validator
          },
        {
         label: 'Payment',
          // subtitle: '50%',
          name: "step 2",
          content: step2Content,
          validator: step2Validator
        },
        {
          // label: 'Step 3',
          // subtitle: '100%',
          name: "step 3",
          content: step3Content,
          validator: step3Validator
        },
        {
            // label: 'Step 2',
            // subtitle: '50%',
            name: "step 4",
            content: step4Content,
            validator: step4Validator
          },
          {
             label: 'Printer',
            // subtitle: '100%',
            name: "step 5",
            content: step5Content,
            validator: step5Validator
          },
          {
             label: 'QA',
            // subtitle: '100%',
            name: "step 5",
            content: step8Content,
            validator: step8Validator
          },
          {
            label: 'Delivery',
           // subtitle: '100%',
           name: "step 6",
           content: step9Content,
           validator: step9Validator
         },
         
      ]}
    />

   </div>
  </div>;
}

export default Regestration;
