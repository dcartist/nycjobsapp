import React from 'react';
import JobSites from './JobSites'

import data from '../data.json'
import Popup from '../Components/Popup'
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function JobCenters() {
  return <div>
        <AnimationOnScroll animateIn="animate__fadeIn">{data.map(item=> <Popup data={item}></Popup>)}</AnimationOnScroll>
<JobSites></JobSites>

  </div>;
}
