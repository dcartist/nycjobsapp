import logo from './logo.svg';
import './App.css';
import data from './data.json'
import JobSites from './Pages/JobSites'

import ReactMap from './Components/Reactmap'
import Popup from './Components/Popup'
function App() {
  
  // console.log(data)

  return (
    <div className="App">
      test
      {/* <ReactMap></ReactMap> */}
   {/* {process.env.REACT_APP_TRIAL} */}
   {/* <GMap options={options} style={{width: '100%', minHeight: '320px'}} /> */}
{/* <JobSites></JobSites> */}

    {data.map(item=> <Popup data={item}></Popup>)}
    </div>
  );
}

export default App;
