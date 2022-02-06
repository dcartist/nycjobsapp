import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Button} from "react-bootstrap"
import moment from 'moment';
import {decodeEntity} from 'html-entities';
import Moment from 'react-moment';
// import 'moment-timezone';
import Popup from '../Components/JobPopUp'
const unescapeUnicode = require('unescape-unicode');


export default function Jobs() {
    const [jobs, setjobs] = useState([]);
    const [searchQuery, setsearchQuery] = useState('');
    
    function capitalizeFirstLetter(s) {
      return s && s[0].toUpperCase() + s.slice(1);
    }
function moneyConvert(s){
  let results = parseInt(s)
  return(results).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
function thedecoded(s){
  let results = s
  results = s.replaceAll("Â", "")
  results = s.replaceAll("â€™", "'",)
  results = s.replaceAll("â€", "'",)
  results = s.replaceAll("â€œ", '"')
  results = s.replaceAll('â€“', '-')
  results = s.replaceAll('â', "'")
  // results = s.replace(/[#â]/g,"'");
  results = s.replace(/[#â]/g, "'");
  // results = s.replaceAll("'''", "`")
  
  // results = s.replaceAll('â', "'")
  return results
  // return utf8.decode(s).toString()
}
    useEffect(() => {
        // const SomeURL = "https://api.adviceslip.com/advice";
        const SomeURL = process.env.REACT_APP_JobsAPI;
    
        const fetchData = async () => {
          try {
            axios.get(SomeURL, {headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}})
      .then(res => {
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
  return <div> <hr></hr> Loading...
      <hr></hr>
  </div>;

} else {
  
  return <div> <hr></hr> <h1 className="dark text-white">JOB LISTING</h1>
  <hr></hr><div className="job-listing">
  {jobs.map(job => (
   <div className="job-block">
    <div><h3>{capitalizeFirstLetter(job.business_title)}</h3></div>
   
   <hr></hr>
   
   <p>Agency: {job.agency} <br></br> Civil Service title: {job.civil_service_title}<br></br> Salary: ${moneyConvert(job.salary_range_from)} - ${moneyConvert(job.salary_range_to)}</p>
   <p>Last updated: <Moment date={job.posting_updated} format="MM/DD/YYYY" /></p>
   
   {/* {thedecoded(job.job_description.substring(0,150))}... */}
   <br></br>
   {/* <Popup {...job}></Popup> */}
   <a href={`https://a127-jobs.nyc.gov/index_new.html?keyword=${job.job_id}`} target="_blank"><Button>More Info</Button></a>
   </div>
  ))}</div>
</div>;
}
  
}
