import React from 'react';
import nycmap from '../Image/nyc_map.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import dcartist from '../Image/dcartist.jpg'
export default function About() {
  return <div className="about-base"> 
  <div className="container aboutSections">
        <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6 mt-4 ">
          <AnimationOnScroll animateIn="animate__bounceIn" delay={400}>
            <img alt="image" className="img-fluid d-block mx-auto"
              src={nycmap}/>
              </AnimationOnScroll>
          </div>
          <div className="col-12 col-md-5 pb-5 ">
          <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
            <h1 className="  text-white mb-3 mt-5">About</h1>
            <p className="lead text-white">NYC Jobs 22 is a website built for the developer week hackathon to display New York City Open Data jobs.</p>

              <hr></hr>
            <h2 className="lead text-white"> NYC Jobs Centers</h2>
            <p>
            Job Centers - List of Job Centers that offer temporary financial assistance, SNAP, and Medicaid to eligible individuals.
https://data.cityofnewyork.us/Business/Directory-Of-Job-Centers/9d9t-bmk7
            </p>
            <hr></hr>
            <h2 className="lead text-white">NYC Jobs</h2>
            <p>
             - This dataset contains current job postings available on the City of New York’s official jobs site (http://www.nyc.gov/html/careers/html/search/search.shtml). Internal postings available to city employees and external postings available to the general public are included.
            https://data.cityofnewyork.us/City-Government/NYC-Jobs/kpav-sd4t
            </p>

            </AnimationOnScroll>

            <div className=" d-flex mt-3 mb-1">
              {/* <a className="btn btn-primary btn-raised  btn-lg   mt-md-3 " href="#"
                role="button">Download Now</a> */}
            </div>
          </div>
      
        </div>
      </div>
      <hr></hr>
      <section class="pt-5 pb-5 aboutSections">
      <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
      <div class="container">
        <div class="row align-items-center justify-content-around">
          <div class="col-12 col-md-6 ">
          <AnimationOnScroll animateIn="animate__fadeIn" delay={300}> 
            <h2 className="text-white">About Developer</h2>
            <p class="text-h3 mt-4 pb-4">Born and raised in the Washington DC metro area, Paula Bannerman is an artist and software engineer with 30 years of programming experience. She works in digital/traditional drawing, photography, videography, painting, charcoal/pastel,  computer-generated 3D, and jewelry. Her passion is encouraging others to find their passions and get them to the next level, especially in Art and STEAM/STEM-related fields.</p>
            </AnimationOnScroll>
            {/* <div class="media mt-4 d-flex">
              <img class="me-3 img-fluid rounded"
                src=" https://dummyimage.com/64x64/5fa9f8/fff"
                alt="Generic placeholder image"/>
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin.
              </div>
            </div>
            <div class="media mt-4 d-flex">
              <img class="me-3 img-fluid rounded"
                src=" https://dummyimage.com/64x64/5fa9f8/fff"
                alt="Generic placeholder image"/>
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                lacinia congue felis in faucibus.
              </div>
            </div> */}
          </div>
          <div class="col-12 col-md-5   mt-4 mt-md-0">
            <img alt="image"
              class="img-fluid mx-auto d-block mb-md-0 mt-md-0 mb-2 mt-2"
              src={dcartist}/>
          </div>
        </div>
      </div>
      </AnimationOnScroll>
    </section>

  </div>
}
