import React, { useContext } from 'react'
import './specialisation.css';
import {useState} from "react";
import {useNavigate } from "react-router-dom";
import NewCourseMap from "../../views/NewCourse/NewCourseMap";
import {Link, useLocation} from "react-router-dom";

const Specialisation = (props) => {


const degrees = [
  { id: 1, title: "Aerospace engineering" },
  { id: 2, title: "Biomedical engineering" },
  { id: 3, title: "Chemical engineering" },
  { id: 4, title: "Electrical and computer systems egineering" },
  { id: 5, title: "Civil engineering" },
  { id: 6, title: "Environmental engineering" },
  { id: 7, title: "Materials engineering" },
  { id: 8, title: "Mechanical engineering" },
  { id: 9, title: "Robotics and mechatronics engineering" },
  { id: 10, title: "Software engineering" },
];

const [major, setMajor] = useState('');

const [selected, setSelected] = useState(0);

  const handleColor = (row) => {
    setSelected(row.id);
  };

  const location = useLocation();
  const semesterStart = location.state.userInfo.commencementYear
  const userInfoPass = location.state.userInfo
      
  const history = useNavigate();

 
  
  const makeLayout = () => {
    
    return (
      
      <div className="specialisation-container">


      <div className="search-container">
        
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

      </div> 

      <div className="bottom-container">
              <button className="back-button" onClick={()=>{history('/')}}>Back</button>
              <button type ="submit" className="submit_button" disabled={major===""} onClick={(e) => {history('/main', {state: {major, semesterStart,userInfoPass }}); localStorage.setItem("yearState", false)}}> Submit </button>
            </div>
      </div>

        
    );
  }
  
  return <div className="abc">{makeLayout()}</div>;



}

export default Specialisation
