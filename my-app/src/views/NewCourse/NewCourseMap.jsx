import React, {useState} from "react";
import './NewCourseMap.css';
import logo from './monash-m.logo.jpg';
import { Link } from "react-router-dom";

const NewCourseMap = () => {

  const [userInfo,setUserInfo] = useState({
    courseName: "",
    commencementYear: "",
    studyLoad: "",
    vceUnitsMaths: "",
    vceUnitsPhysics: "",
    specialisation: "",

  });
  
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
  };



  return(
    <div className="main-content">



        <div className="form-container">

          <div className="image-container">
            <img className = "new-course-logo" src={logo}></img>
          </div>

          <div className="form"> 

            <div className="title-container">
              <h1 className="create-plan">Create new course map</h1>
            </div>  

            <form onSubmit={handleSubmit}> 

                <h1 className="course-name">Name your plan</h1>
                  <input type="text" className="plan-name" name="courseName" required onChange={handleChange}/>

                <h1 className="year-commencement">Year of commencement</h1>
                  <select className="commencement-year" name="commencementYear" required onChange={handleChange}>
                    <option value="2018-start">2018</option >
                    <option value="2019-start">2019</option>
                    <option value="2020-start">2020</option>
                    <option value="2021-start">2021</option>
                    <option value="2022-start">2022</option>
                    <option value="2023-start">2023</option>
                  </select>

                <h1 className="study-load" >Study load</h1>
                  <select className="study-load" name="studyLoad" required onChange={handleChange}>
                    <option value="full-time-study">Full-Time</option>
                    <option value="part-time-study">Part-Time</option>

                  </select>

                <h1 className="year-12-units">Which Year 12 Unit(s) have you completed?</h1>
                  <div className="checkbox-container">
                    <input type="checkbox" id="maths-34" name="vceUnitsMaths" onChange={handleChange}/>
                    <label htmlFor="maths-34">VCE Specialist Mathemathics 3/4</label>
                  </div>
                  <div className="checkbox-container">
                    <input type="checkbox" id="physics-34" name="vceUnitsPhysics" onChange={handleChange}/>
                    <label htmlFor="physics-34">VCE Physics 3/4</label>
                  </div>

                    <button type="submit" className="create-plan-button" >
                      <Link to="/specialisation"> Submit </Link>
                    </button>
             </form>
            </div>

        </div> 
    </div>
  )


 
}

export default NewCourseMap