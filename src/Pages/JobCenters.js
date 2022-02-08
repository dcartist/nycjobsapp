import React, {useState} from 'react';
import data from '../data.json'
import Popup from '../Components/Popup'
import { Parallax} from 'react-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {Button} from 'react-bootstrap'

import nycPhoto from '../Image/nycmapbackground.png'

export default function JobCenters() {

  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

const [jobcenters, setjobcenters] = useState(data);
function findcenters(place){
  if (place !== 'Clear'){
  let results = data.filter(jobcenter=>jobcenter.borough === place)
  setjobcenters(results)
  } else {
    setjobcenters(data)
  }
}
const unique = [...new Set(data.map(item => item.borough))]
unique.push("Clear")

  return <div>  
 <Parallax
        blur={{ min: -10, max: 9 }}
        bgImage={nycPhoto}
        bgImageAlt="new york city"
        strength={500}

    >
       <div className="job-title-base"> <div className="job-title"><h1>Job Centers</h1> <p>A list of Job Centers that provide eligible individuals with temporary financial assistance, SNAP, and Medicaid.</p></div></div>
    </Parallax>
    <ul className="bouroughs-base">
    {unique.map((bourough, index)=><li key={index} onClick={(e)=>findcenters(bourough)} className="bouroughs"><Button>{bourough}</Button></li>)}
        {/* <AnimationOnScroll animateIn="anumate__fadeIn"></AnimationOnScroll> */}
    </ul>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="job-center-base">
          {jobcenters.map((item, index)=> <div key={index}>
    <h2 className="text-white text-larger">{item.facility_name}</h2>
    <span>{item.nta}</span>
       <p>{item.street_address}<br></br>{item.city}, {item.zip_code}</p>
       <hr></hr>
            <p>{item.phone_number_s}</p>
      <Popup data={item}></Popup>
  </div>)}</div>
  
  </AnimationOnScroll>
  
  </div>;
}
