import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from "react-bootstrap"

export default function Jobs() {
    const [jobs, setjobs] = useState([]);
    function capitalizeFirstLetter(s) {
      return s && s[0].toUpperCase() + s.slice(1);
    }
    
    useEffect(() => {
        // const SomeURL = "https://api.adviceslip.com/advice";
        const SomeURL = process.env.REACT_APP_JobsAPI;
    
        const fetchData = async () => {
          try {
            axios.get(SomeURL)
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
    <Card bg={'dark'}>
    <Card.Header as="p">{capitalizeFirstLetter(job.business_title)}</Card.Header>
    <Card.Body>
      {/* <Card.Title>Special title treatment</Card.Title> */}
      {/* <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text> */}
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  ))}</div>
  MORE JOBS
</div>;
}
  
}
