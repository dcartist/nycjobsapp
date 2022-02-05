import React from 'react';
import nycmap from '../Image/nyc_map.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function About() {
  return <div> 
  <div className="container">
        <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6 mt-4">
          <AnimationOnScroll animateIn="animate__bounceIn" delay={400}>
            <img alt="image" className="img-fluid d-block mx-auto"
              src={nycmap}/>
              </AnimationOnScroll>
          </div>
          <div className="col-12 col-md-5 pb-5 ">
          <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
            <h1 className="  text-white mb-3 mt-5">About</h1>
            <p className="lead text-white">NYC Jobs 22 is a website built for the developer week hackathon to display New York City Open Data jobs.</p>

              
            <p>
            Job Centers - List of Job Centers that offer temporary financial assistance, SNAP, and Medicaid to eligible individuals.
https://data.cityofnewyork.us/Business/Directory-Of-Job-Centers/9d9t-bmk7
            </p>


            </AnimationOnScroll>

            <div className=" d-flex mt-3 mb-1">
              <a className="btn btn-primary btn-raised  btn-lg   mt-md-3 " href="#"
                role="button">Download Now</a>
            </div>
          </div>
      
        </div>
      </div>


  </div>;
}
