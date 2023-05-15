import React, { useContext } from 'react'
import './specialisation.css';
import {useState} from "react";
import {useNavigate } from "react-router-dom";
import NewCourseMap from "../../views/NewCourse/NewCourseMap";
import {Link, useLocation} from "react-router-dom";

const Specialisation = (props) => {


const degrees = [
  { id: 1, title: "Aerospace Engineering" },
  { id: 2, title: "Biomedical Engineering" },
  { id: 3, title: "Chemical Engineering" },
  { id: 4, title: "Electrical Engineering" },
  { id: 5, title: "Civil Engineering" },
  { id: 6, title: "Environmental Engineering" },
  { id: 7, title: "Materials Engineering" },
  { id: 8, title: "Mechanical Engineering" },
  { id: 9, title: "Robotics & Mechatronics Engineering" },
];

const [major, setMajor] = useState('');

const [selected, setSelected] = useState(0);


  const handleColor = (row) => {
    setSelected(row.id);
  };

  const location = useLocation();
  const semesterStart = location.state.userInfo.commencementYear
      
  const history = useNavigate();

  const makeLayout = () => {
    
    return (
      

      <div className="search-container">
              <button className="back-button" onClick={()=>{history('/')}}>Back</button>


        
            <div>
                <h4 className="select-course"> Select your relevant course:</h4>
                <h5 className="current-selection">Currently selected: {major}</h5>
            </div>
          
            <div className = "course-container">
              {degrees.map((degree) => (
              <button className = "course-block"
              key={degree.id}
              onClick={()=> [handleColor(degree),setMajor(degree.title)]}
              style={{ backgroundColor: degree.id === selected ? "#0165AC" : "", color: degree.id === selected ? "white" : ""}}
              >
                {degree.title}
                </button>
              ))}
              
            </div>

              <button type ="submit" className="submit_button" onClick={() => history('/main', {state: {major, semesterStart}})}> Submit </button>

      </div> 
        
    );
  }
  
  return <div className="abc">{makeLayout()}</div>;



}

export default Specialisation
