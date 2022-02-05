
import './App.css';
import data from './data.json'
import './bootstrap.min.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Navbar from './Components/Navigation'
import ReactMap from './Components/Reactmap'
// import { Parallax } from 'react-parallax';
import Popup from './Components/Popup'
import { Parallax, Background } from 'react-parallax';

import About from './Pages/About'
import nycPhoto from './Image/nycmap.png'
import Jobs from './Pages/Jobs'
function App() {
  
  // console.log(data)

  return (
    <div className="App">
       {/* <Parallax strength={300}>
        <Background>
            <img src={nycPhoto} alt="fill murray" />
        </Background>
    </Parallax> */}
    <Navbar></Navbar>
    <Parallax
        blur={{ min: -10, max: 9 }}
        bgImage={nycPhoto}
        bgImageAlt="the dog"
        strength={500}
    >
        Blur transition from min to max
        <div style={{ height: '90vh' }} />
    </Parallax>

   {/* <AnimationOnScroll animateIn="animate__fadeIn">
      <div className="mainMap"><ReactMap></ReactMap></div>
      </AnimationOnScroll> */}
   {/* {process.env.REACT_APP_TRIAL} */}
  
{/* <JobSites></JobSites> */}
{/* <Jobs></Jobs> */}
<AnimationOnScroll animateIn="animate__fadeIn"><About></About></AnimationOnScroll>
      
      <AnimationOnScroll animateIn="animate__fadeIn">{data.map(item=> <Popup data={item}></Popup>)}</AnimationOnScroll>
    
    </div>
  );
}

export default App;
