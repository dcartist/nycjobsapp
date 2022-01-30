import logo from './logo.svg';
import './App.css';
import data from './data.json'
import JobSites from './Pages/JobSites'
function App() {
  
  console.log(data)
  return (
    <div className="App">
   {/* {process.env.REACT_APP_TRIAL} */}
<JobSites></JobSites>
    </div>
  );
}

export default App;
