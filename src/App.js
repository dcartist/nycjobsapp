
import './App.css';
import data from './data.json'
import './bootstrap.min.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Navbar from './Components/Navigation'
import JobList from './Pages/Jobs'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import ReactMap from './Components/Reactmap'
// import { Parallax } from 'react-parallax';
import Popup from './Components/Popup'
import { Parallax, Background } from 'react-parallax';

import About from './Pages/About'
import Jobs from './Pages/Jobs'
import JobCenters from './Pages/JobCenters'
function App() {
  
  // console.log(data)

  return (
    <div className="App">
    <Navbar></Navbar>
  
    <Routes>
      {/* <Route path="/" element={<App />}> */}
        <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/centers" element={<JobCenters />} />
          <Route path="/jobs" element={<JobList />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      {/* </Route> */}
    </Routes>
   {/* <AnimationOnScroll animateIn="animate__fadeIn">
      <div className="mainMap"><ReactMap></ReactMap></div>
      </AnimationOnScroll> */}
   {/* {process.env.REACT_APP_TRIAL} */}
  
{/* <JobSites></JobSites> */}
{/* <Jobs></Jobs> */}
{/* <AnimationOnScroll animateIn="animate__fadeIn"><About></About></AnimationOnScroll> */}
      
      {/* <AnimationOnScroll animateIn="animate__fadeIn">{data.map(item=> <Popup data={item}></Popup>)}</AnimationOnScroll> */}
    
    </div>
  );
}

export default App;
