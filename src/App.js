
import './App.css';
import data from './data.json'
import './bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMap from './Components/Reactmap'
import Popup from './Components/Popup'
function App() {
  
  // console.log(data)

  return (
    <div className="App">
      <div className="mainMap"><ReactMap></ReactMap></div>
      
   {/* {process.env.REACT_APP_TRIAL} */}
  
{/* <JobSites></JobSites> */}

    {data.map(item=> <Popup data={item}></Popup>)}
    </div>
  );
}

export default App;
