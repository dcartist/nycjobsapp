import React from 'react';
import { Parallax} from 'react-parallax';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import nycPhoto from '../Image/manhattan-sunset-nyc-2021-08-26-23-04-25-utc_resize.jpg'
import jobcenterphoto from '../Image/yellow-taxi-in-nyc-2021-08-26-15-48-00-utc_resize.jpg'
import joblistingphoto from '../Image/new-york-2021-08-26-17-19-55-utc_resize.jpg'
import Moment from 'react-moment';

import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Home() {

  const lastUpdated = Date.now();
  return <div>

<AnimationOnScroll animateIn="animate__fadeIn">
      <Parallax
        blur={{ min: -5, max: 9 }}
        bgImage={nycPhoto}
        bgImageAlt="new york city"
        strength={500}

        style={{
          backgroundPosition: 'bottom center',
      }}

    >
        
<AnimationOnScroll animateIn="animate__fadeIn">
        <div className="home-intro"><div className="home-base"> <p className="display-1">NYC JOBS 22</p> <p>Helping those in need of jobs and financial aid in the New York City Area</p> </div>
        </div>
        </AnimationOnScroll>
    </Parallax>
    </AnimationOnScroll>
    
    <section id="section-1" className="pt-0 pb-0 bg-dark">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
         
          <div className="card p-0 m-0 col-md-6  text-white  border-0 ">
            <img className="card-img h-100 shadow"
              src={jobcenterphoto}
              alt="NYC job centers. Photo of taxi cabs."/>
            <div
              className="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">
              <div className="container-fluid h-25">
               
              </div>
              <div className="container-fluid  h-50  text-center">
                <div className="row h-100 align-items-center">
                  <div className="col-12 home-base2">
                    <h2 className="text-white  mt-3 mb-3">Job Centers<br></br>
                    <hr></hr>
                      <p className="home-text">A list of job centers that contain temporary financial assistance, SNAP, and Medicaid.</p>
                      <div><Link to="/jobs"><Button variant="danger">View Job Centers</Button></Link></div>
                      

                    </h2>
                  </div>
                </div>
              </div>
              <div className="container-fluid h-25  ">
                <div className="row h-100 align-items-center">
                </div>
              </div>
            </div>
          </div>
          <div className="card p-0 m-0 col-md-6  text-white  border-0 ">
            <img className="card-img h-100 shadow"
              src={joblistingphoto}
              alt="NYC job Listings. Photo of NYC buildings"/>
            <div
              className="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">
              <div className="container-fluid  h-75  text-center">
                <div className="row h-100 align-items-center">
                  <div className="col-12 home-base2">
                    <h2 className="text-white  mt-3 mb-3">Job Listing<br></br>

                    <hr></hr>
                      <p className="home-text"> the most recent (updated <Moment format="MM/DD/YYYY">
                {lastUpdated}
            </Moment>)  job postings from the City of New York's official jobs site.</p>
                      <div><Link to="/jobs"><Button variant="danger">View Job Listing</Button></Link></div>
                      
                    </h2>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
}
