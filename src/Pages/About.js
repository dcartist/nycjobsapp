import React from 'react';
import nycmap from '../Image/nyc_map.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import dcartist from '../Image/dcartist.jpg'
import {Button} from 'react-bootstrap'
import { BiLinkExternal, BiWorld } from 'react-icons/bi'
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai'
export default function About() {
  return <div className="about-base"> 
  <div className="container aboutSections">
        <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6 mt-4 ">
          <AnimationOnScroll animateIn="animate__bounceIn" delay={400}>
            <img alt="nyc map" className="img-fluid d-block mx-auto"
              src={nycmap}/>
              </AnimationOnScroll>
          </div>
          <div className="col-12 col-md-5 pb-5 ">
          <AnimationOnScroll animateIn="animate__fadeIn" delay={100}>
            <h1 className="  text-white mb-3 mt-5">About</h1>
            <p className="lead text-white">NYC Jobs 22 is a website built for the developer week hackathon to display jobs and other related resources using New York City Open Data.</p>

              <hr></hr>
            <h2 className="lead text-white"> NYC Jobs Centers</h2>
            <p>
            Job Centers - List of Job Centers that offer temporary financial assistance, SNAP, and Medicaid to eligible individuals.


            </p>
            <a href="https://data.cityofnewyork.us/Business/Directory-Of-Job-Centers/9d9t-bmk7" target="_blank" rel="noreferrer">
            <Button variant="danger"> go to dataset <BiLinkExternal></BiLinkExternal></Button></a>
            <hr></hr>
            <h2 className="lead text-white">NYC Jobs</h2>
            <p>
             This dataset contains current job postings available on the City of New York’s official jobs site (http://www.nyc.gov/html/careers/html/search/search.shtml). Internal postings available to city employees and external postings available to the general public are included.
            </p>
            <a href="https://data.cityofnewyork.us/City-Government/NYC-Jobs/kpav-sd4t" target="_blank" rel="noreferrer">
            <Button variant="danger"> go to dataset <BiLinkExternal></BiLinkExternal></Button></a>
            </AnimationOnScroll>

            <div className=" d-flex mt-3 mb-1">
              {/* <a className="btn btn-primary btn-raised  btn-lg   mt-md-3 " href="#"
                role="button">Download Now</a> */}
            </div>
          </div>
      
        </div>
      </div>
      <section className="pt-5 pb-5 aboutSections">
      <AnimationOnScroll animateIn="animate__fadeIn" delay={100}>
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-12 col-md-6 ">
            <h2 className="text-white">About Developer</h2>
            <p className="text-h3 mt-4 pb-4">Born and raised in the Washington DC metro area, Paula Bannerman is an artist and software engineer with 30 years of programming experience. She works in digital/traditional drawing, photography, videography, painting, charcoal/pastel,  computer-generated 3D, and jewelry. Her passion is encouraging others to find their passions and get them to the next level, especially in Art and STEAM/STEM-related fields.</p>
           

            <div className="media mt-4 d-flex">
              <BiWorld className="about-icon"></BiWorld>
              <div className="media-body">
                <a className="about-link"href="https://www.dcartist.com" target="_blank" rel="noreferrer">https://www.dcartist.com</a>
              </div>
            </div>
            <div className="media mt-4 d-flex">
              <AiOutlineMail className="about-icon"></AiOutlineMail>
              <div className="media-body">
                <a className="about-link"href="mailto:Pbannerman13@gmail.com"  rel="noreferrer">Pbannermn13@gmail.com</a>
              </div>
            </div>
            <div className="media mt-4 d-flex">
              <AiFillLinkedin className="about-icon"></AiFillLinkedin>
              <div className="media-body">
                <a className="about-link"href="https://www.linkedin.com/in/dcartist" target="_blank" rel="noreferrer">https://www.linkedin.com/in/dcartist</a>
              </div>
            </div>
            <div className="media mt-4 d-flex">
              <AiFillGithub className="about-icon"></AiFillGithub>
              <div className="media-body">
                <a className="about-link"href="https://github.com/dcartist" target="_blank" rel="noreferrer">https://github.com/dcartist</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 mt-4 mt-md-0">
            <img alt="Paula Bannerman a.k.a DCartist"
              className="img-fluid mx-auto d-block mb-md-0 mt-md-0 mb-2 mt-2"
              src={dcartist}/>
          </div>
        </div>
      </div>
      </AnimationOnScroll>
    </section>

  </div>
}
