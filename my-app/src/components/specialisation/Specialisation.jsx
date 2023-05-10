import React, { useContext } from 'react'
import './specialisation.css';
import {useState} from "react";
import {useNavigate } from "react-router-dom";
import NewCourseMap from "../../views/NewCourse/NewCourseMap";
import {Link, useLocation} from "react-router-dom";

const Specialisation = (props) => {

  const userInfo = {
    eng_major: '',
}

const [major, setMajor] = useState('');

const test = useState('');
userInfo.eng_major = major;

const handleClick = () => {
}


  const location = useLocation();
  const semesterStart = location.state.userInfo.commencementYear
      
  const history = useNavigate();

  const makeLayout = () => {
    
    return (
      <div className="search-container">
        
            <div>
                <h4 className="select-course"> Select your relevant course starting: {location.state.userInfo.commencementYear} </h4>
                <h5 className="current-selection">Currently selected: {major}</h5>
            </div>
          
            <div>
            <div className="semester-block">
                    <button className="course-block" onClick={(e)=> [setMajor('Aerospace Engineering',e),handleClick('Software Engineering',e)]} onChange={(e) => props.onChange(e.target.value)}>Aerospace Engineering</button>
                    <button className="course-block" onClick={(e)=> [setMajor('Chemical Engineering',e),handleClick('Chemical Engineering',e)]} onChange={(e) => props.onChange(e.target.value)}>Chemical Engineering </button>
                    <button className="course-block" onClick={(e)=> [setMajor('Civil Engineering',e),handleClick('Civil Engineering',e)]} onChange={(e) => props.onChange(e.target.value)}> Civil Engineering </button>
                </div>

                <div className="semester-block">
                    <button className="course-block" onClick={(e)=> [setMajor('Electrical Engineering',e),handleClick('Electrical Engineering',e)]}> Electrical Engineering </button>
                    <button className="course-block" onClick={(e)=> [setMajor('Environmental Engineering',e),handleClick('Environmental Engineering',e)]}> Environmental Engineering </button>
                    <button className="course-block" onClick={(e)=> [setMajor('X Engineering',e),handleClick('X Engineering',e)]}> X Engineering </button>
                </div>

                <div className="semester-block">
                  <button className="course-block" onClick={(e)=> [setMajor('Mechanical Engineering',e),handleClick('Mechanical Engineering',e)]}> Mechanical Engineering </button>
                  <button className="course-block" onClick={(e)=> [setMajor('Robotics & Mechatronics',e),handleClick('Robotics & Mechatronics',e)]}> Robotics & Mechatronics </button>
                  <button className="course-block" onClick={(e)=> [setMajor('Software Engineering',e),handleClick('Software Engineering',e)]}>Software Engineering </button>
                </div>
            </div>

              <button type ="submit" className="submit_button" onClick={() => history('/main', {state: {major, semesterStart}})}> Submit </button>

      </div> 
        
    );
  }
  
  return <div className="abc">{makeLayout()}</div>;



}

export default Specialisation
