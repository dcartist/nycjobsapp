import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from "react-bootstrap"
import moment from 'moment';
import {decodeEntity} from 'html-entities';
import Moment from 'react-moment';
// import 'moment-timezone';
const utf8 = require('utf8');
export default function Jobs() {
    const [jobs, setjobs] = useState([]);
    function capitalizeFirstLetter(s) {
      return s && s[0].toUpperCase() + s.slice(1);
    }
    
function thedecoded(s){
  return utf8.decode(s).toString()
}
    useEffect(() => {
        // const SomeURL = "https://api.adviceslip.com/advice";
        const SomeURL = process.env.REACT_APP_JobsAPI;
    
        const fetchData = async () => {
          try {
            axios.get(SomeURL, {headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}})
      .then(res => {
        console.log(res);
        console.log(res.data);
        setjobs(res.data)
      })

          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
if (jobs.length == 0 ){
  return <div> <hr></hr> JOBS GO HERE
      <hr></hr>
  </div>;

} else {
  
  return <div> <hr></hr> <h1 className="dark">JOB LISTING</h1>
  <hr></hr><div className="job-listing">
  {jobs.map(job => (
   <div className="job-block">
    <div><h3>{capitalizeFirstLetter(job.business_title)}</h3></div>
   
   <hr></hr>
   Last updated: <Moment date={job.posting_updated} format="MM/DD/YYYY" />
   {/* {job.} */}
   <p>{job.agency}</p>
   {job.job_description.substring(0,150)}...
   </div>
  ))}</div>
  MORE JOBS
</div>;
}
  
}
