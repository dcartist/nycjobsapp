
import './App.css';
import './bootstrap.min.css';
import "animate.css/animate.min.css";
import Navbar from './Components/Navigation'
import JobList from './Pages/Jobs'
import Home from './Pages/Home'
import {
  Route,
  Routes
} from "react-router-dom";

import About from './Pages/About'
import JobCenters from './Pages/JobCenters'

function App() {
  console.log = function() {}

  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
        <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/centers" element={<JobCenters />} />
          <Route path="/jobs" element={<JobList />} />
    </Routes>

    
    </div>
  );
}

export default App;
