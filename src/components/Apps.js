import React, { useState,useEffect } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Apps.css";
import styled from "styled-components";
import {
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaMapMarkerAlt,
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

function Apps() {
    const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://randomuser.me/api/?results=10")
          .then((response) => response.json())
          .then((data) => setUser(data.results));
  }

  useEffect(() => {
    fetchData();
  },[])

  return<div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link> 
 <Navbar/>
    <div className="reg5">
<div class="bar">
<Tabs >
      <TabList className="mt--10 xx">
        <Tab class="se">Recent Applications</Tab>
        <Tab>Past Applications</Tab>
      </TabList>
</Tabs>

<div class="text-secondary lf">Sort By</div>
<div class="text-dark lf">Recommended</div>
</div>
<hr/>

<div>
<GridWrapper>
        {user && user.length > 0 && user.map((userObj, index) => (
            <div key={userObj.id}>
                <div class="dd">
                <div class = "row">
<div class = "col-sm-6 ">
<center><img class="circle responsive-img" 
src={userObj.picture.medium}/>
<span><a class="btn-floating pulse waves-effect waves-light add"></a></span></center>
</div>
<div class = "col-sm-6 details">
<center><p class="name"><b>  {userObj.name.first}</b> </p></center>
<center><p> {userObj.dob.date}</p></center>
<center><p>{userObj.phone}</p></center>
</div>
</div>

<div class="row">
<table class = "table">
<tr>
<td>
<p rowspan={2}><FaCalendarAlt/></p>
</td>
<td>
<p><b>From: </b></p>
<p>13 jan 2022</p>
</td>
<td>
<p><b>To:</b></p>
<p>13 jan 2022</p>
</td>
</tr>
<tr><td><FaMapMarkerAlt/></td><td>Location</td></tr>
<tr><td colSpan={3}> {userObj.location.street.name} {userObj.city}  {userObj.country} </td></tr>
</table>
</div>

<center><p class="bn">Official Passport</p> <p class="bn">Normal Service</p></center>

                </div>


</div>
          ))}
   </GridWrapper>;
      </div>
      </div>
    </div>


}
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  place-content: center;
  place-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 20px;
`;
export default Apps;
