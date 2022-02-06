import React, {useState} from 'react';
import data from '../data.json'
import Popup from '../Components/Popup'
import { Parallax, Background } from 'react-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {Button} from 'react-bootstrap'
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
    <ul>
    {unique.map((bourough, index)=><li key={index} onClick={(e)=>findcenters(bourough)} className="bouroughs"><Button>{bourough}</Button></li>)}
        {/* <AnimationOnScroll animateIn="anumate__fadeIn"></AnimationOnScroll> */}
    </ul>
        {/* <AnimationOnScroll animateIn="anumate__fadeIn"></AnimationOnScroll> */}
        <AnimationOnScroll animateIn="animate__fadeIn">{jobcenters.map(item=> <Popup data={item}></Popup>)}</AnimationOnScroll>

  </div>;
}
