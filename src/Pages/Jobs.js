import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Form} from "react-bootstrap"
import Moment from 'react-moment';
import { Parallax } from 'react-parallax';
import { BiLinkExternal } from 'react-icons/bi';
import nycPhoto from '../Image/nycmapbackground.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Jobs() {
    const [jobs, setjobs] = useState([]);
    const [fulljobs, setfulljobs] = useState([]);
    const lastUpdated = Date.now();


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
            axios.get(SomeURL)
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
  return <div>  <Parallax
  blur={{ min: -10, max: 9 }}
  bgImage={nycPhoto}
  bgImageAlt="new york city"
  strength={500}

>
 <div className="job-title-base"> <div className="job-title"><h1>Job Listing</h1> <p>This section contains the most recent (updated <Moment format="MM/DD/YYYY">
                {lastUpdated}
            </Moment>)  job postings from the City of New York's official jobs site.</p></div></div>
</Parallax><hr></hr> 
  <h1 className="text-white">Loading...</h1>
      <hr></hr>
  </div>;

} else {
  
  return <div> 
         <Parallax
        blur={{ min: -10, max: 9 }}
        bgImage={nycPhoto}
        bgImageAlt="new york city"
        strength={500}

    >
       <div className="job-title-base"> <div className="job-title"><h1>Job Listing</h1> <p>This section contains the most recent (updated <Moment format="MM/DD/YYYY">
                {lastUpdated}
            </Moment>)  job postings from the City of New York's official jobs site.</p></div></div>
    </Parallax>

  <hr></hr>
  <Form>
   <Form.Group className="mb-3" controlId="formBasicEmail">
    <h5 className="text-white">Search by job title</h5>
    <Form.Control size="lg" type="text" placeholder="Search Job Title Here..." onChange={e => searchQueryFunction(e)} onKeyDown={e => enterDisabler(e)}  />
    <Form.Text className="text-white">
      {jobs.length} results
    </Form.Text>
  </Form.Group>
   </Form>
  <div className="job-listing">
  
  {jobs.map((job, index) => (<AnimationOnScroll animateIn="animate__fadeIn">
   <div className="job-block" key={index}>
   <hr></hr>
   <p className="job-header">{job.business_title}</p>
   <hr></hr>
   <p><p>Agency: <br></br> {job.agency}</p> 
   <p>Civil Service title:<br></br> {job.civil_service_title}</p>Salary: ${moneyConvert(job.salary_range_from)} - ${moneyConvert(job.salary_range_to)}</p>
   <p>Last updated: <Moment date={job.posting_updated} format="MM/DD/YYYY" /></p>
   <br></br>
   <a href={`https://a127-jobs.nyc.gov/index_new.html?keyword=${job.job_id}`} target="_blank" rel="noreferrer"><Button variant="danger">More Info <BiLinkExternal></BiLinkExternal></Button></a>
   </div></AnimationOnScroll>
  ))}</div>
</div>;
}
  
}
