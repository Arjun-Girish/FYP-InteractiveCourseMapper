import "./App.css";
import Router from './router'
import logo from './logo.png';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="wrap">
      <div className="header-container">
      <img class="logo" src={logo} alt="React Image" /></div>

      <div class="navbar-container">
      <li><a class = "navbar-font"> </a><Link to="/">Home</Link></li> 
      <li><a class = "navbar-font"> </a><Link to="https://forms.monash.edu/course-advice?chatbot=nomount">Course Advice Request</Link></li> 
      <li><a class = "navbar-font"> </a><Link to="https://forms.monash.edu/enrolment-amendment?chatbot=nomount">Enrolment Amendment</Link></li> 
    </div>

      <div className="main">
        <Router />
      </div>

      <div className="footer-container">
        <div className="text-contaienr">
          <h1 className="designed-by">Designed by:</h1>
          <h2 className="student-name">Malith Liyanaarachchi</h2>
          <h2 className="student-name">Arjun Girish</h2>
          <h2 className="student-name">Jing Wu</h2>
        </div>
    </div>    
    </div>
  );
}

export default App;
