import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Button, Form, FormGroup} from "react-bootstrap"
import moment from 'moment';
import Moment from 'react-moment';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import Popup from '../Components/JobPopUp'


export default function Jobs() {
    const [jobs, setjobs] = useState([]);
    const [fulljobs, setfulljobs] = useState([]);
    const [searchQuery, setsearchQuery] = useState('');
    
    function capitalizeFirstLetter(s) {
      return s && s[0].toUpperCase() + s.slice(1);
    }

function enterDisabler(event){
  if(event.keyCode === 13) {
    event.preventDefault();
    return false;
  }

}
function moneyConvert(s){
  let results = parseInt(s)
  return(results).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function searchQueryFunction(e){
  e.preventDefault();
  if (e.target.value.length>=3){
    let results = fulljobs.filter(items=> items.business_title.toLowerCase().includes(e.target.value.toLowerCase()) || items.civil_service_title.toLowerCase().includes(e.target.value.toLowerCase()))
    if (results.length > 0){
      setjobs(results)
    } else {
      setjobs(fulljobs)
    }
  }
  else {
    setjobs(fulljobs)
  }

}
    useEffect(() => {
        const SomeURL = process.env.REACT_APP_JobsAPI;
    
        const fetchData = async () => {
          try {
            axios.get(SomeURL, {headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}})
      .then(res => {
        setfulljobs(res.data);
        setjobs(res.data)
      })

          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
if (jobs.length === 0 ){
  return <div> <hr></hr> 
  <h1 className="text-white">Loading...</h1>
      <hr></hr>
  </div>;

} else {
  
  return <div> <hr></hr> <h1 className="dark text-white">JOB LISTING</h1>
  <hr></hr>
  <Form>
   <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Search by job title</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Search Job Title" onChange={e => searchQueryFunction(e)} onKeyDown={e => enterDisabler(e)}  />
    <Form.Text className="text-muted">
      {jobs.length} results
    </Form.Text>
  </Form.Group>
   </Form>
  <div className="job-listing">
  
  {jobs.map((job, index) => (<AnimationOnScroll animateIn="animate__fadeIn">
   <div className="job-block" key={index}>
    <div><h3>{capitalizeFirstLetter(job.business_title)}</h3></div>
   
   <hr></hr>
 
   
   <p>Agency: {job.agency} <br></br> Civil Service title: {job.civil_service_title}<br></br> Salary: ${moneyConvert(job.salary_range_from)} - ${moneyConvert(job.salary_range_to)}</p>
   <p>Last updated: <Moment date={job.posting_updated} format="MM/DD/YYYY" /></p>
   <br></br>
   {/* <Popup {...job}></Popup> */}
   <a href={`https://a127-jobs.nyc.gov/index_new.html?keyword=${job.job_id}`} target="_blank" rel="noreferrer"><Button>More Info</Button></a>
   </div></AnimationOnScroll>
  ))}</div>
</div>;
}
  
}
