import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./home.css";
import styled from "styled-components";
import {
  FaSearch,
  FaFilter,
  FaPlusCircle
} from "react-icons/fa";
import Lottie from "react-lottie";
import Navbar from './Navbar';
import animation from './pass.json';
import payment from './payment.json';
import qa from './qa.json';
import review from './review.json';
import reg from './reg.json';
import printer from './printer.json';

import { Wave, Random } from "react-animated-text";

function Home() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
  
      window.location = '/regestration';

    }
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: reg,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: payment,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: review,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions5 = {
        loop: true,
        autoplay: true,
        animationData: qa,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions6 = {
        loop: true,
        autoplay: true,
        animationData: printer,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return<div>  <Navbar/>
   <div className="home">

 <div class="wrapper">
  <div>
  <span>01</span>
  <div class="circle1 circle"  onClick={routeChange}>
    
  <div class="icon">
      <Lottie 
	    options={defaultOptions}
        height={220}
        width={220}
      />
    </div>
</div>
      <span className="reg">Rgistration</span>
  </div>
  <div></div>
  <div>
<span>03</span>
     <div class="circle">
     <div class="icon">
      <Lottie 
	    options={defaultOptions3}
        height={220}
        width={220}
      />
    </div>
</div>

<span className="reg2">review</span>
</div>
  <div></div>
  <div>  
  <span>05</span>
    <div class="circle">
    <div class="icon">
      <Lottie 
	    options={defaultOptions5}
        height={220}
        width={220}
      />
    </div>
</div>

<span className="reg2">Quality</span>
</div>
   <div></div>
   <div></div> 
  <div> 

  <span>02</span>
     <div class="circle">
 
     <div class="icon">
      <Lottie 
	    options={defaultOptions2}
        height={220}
        width={220}
      />
    </div>
</div>
<span className="reg2">Manual payment</span>
</div>
<div></div>
  <div> 
  <span>04</span>
     <div class="circle">
     <div class="icon">
      <Lottie 
	    options={defaultOptions6}
        height={220}
        width={220}
      />
    </div>
</div>
<span className="reg2">Printer</span>
</div>
<div></div>
<div> 
  <span>06</span>
     <div class="circle">
     <div class="icon">
      <Lottie 
	    options={defaultOptions4}
        height={220}
        width={220}
      />
    </div>
</div>
<span className="reg2">Delivery</span>
    </div>
 
</div>
</div>
  </div>;
}

export default Home;
