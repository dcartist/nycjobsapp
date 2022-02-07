import React, {useState} from 'react';
import data from '../data.json'
import Popup from '../Components/Popup'

import Mapalt from "../Components/Mapalt"
import { Parallax, Background } from 'react-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {Button} from 'react-bootstrap'

import nycPhoto from '../Image/nycmapbackground.png'

export default function JobCenters() {
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

        style={{
          backgroundPosition: 'bottom center',
      }}

    >
       <div style={{ height: '30vh' }}> <h1>Blur transition from min to max</h1> </div>
    </Parallax>
    <ul className="bouroughs-base">
    {unique.map((bourough, index)=><li key={index} onClick={(e)=>findcenters(bourough)} className="bouroughs"><Button>{bourough}</Button></li>)}
        {/* <AnimationOnScroll animateIn="anumate__fadeIn"></AnimationOnScroll> */}
    </ul>
        {/* <AnimationOnScroll animateIn="anumate__fadeIn"></AnimationOnScroll> */}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="job-center-base">
          {jobcenters.map(item=> <div>
          {/* <Mapalt {...item}></Mapalt> */}
    <h2 className="text-white">{item.facility_name}</h2>
    {item.nta}
       <p>{item.street_address}<br></br>{item.city}, {item.zip_code}</p>
       <hr></hr>
            <p>{item.phone_number_s}</p>
      <Popup data={item}></Popup>
  </div>)}</div>
  
  </AnimationOnScroll>
  
  {/* <JobsMapped data={jobcenters} {...jobcenters}></JobsMapped> */}
  </div>;
}
