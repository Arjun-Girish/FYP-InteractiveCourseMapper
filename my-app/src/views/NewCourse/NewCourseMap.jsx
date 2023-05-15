import React, {useState} from "react";
import './NewCourseMap.css';
import logo from './monash-m.logo.jpg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Specialisation from "../../components/specialisation/Specialisation"
const NewCourseMap = () => {

  const [userInfo,setUserInfo] = useState({
    courseName: "",
    commencementYear: "2018",
    studyLoad: "full-time-study",
    vceUnitsMaths: "",
    vceUnitsPhysics: "",
    specialisation: "",

  });

  const history = useNavigate();

  
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(userInfo);
  };




  return(
    <div className="main-content">



        <div className="form-container">

          <div className="image-container">
            <img className = "new-course-logo" alt = "monash-m-logo" src={logo}></img>
          </div>

          <div className="form"> 

            <div className="title-container">
              <h1 className="create-plan">Create new course map</h1>

            </div>  

            <form> 

                <h1 className="course-name">Name your plan</h1>
                  <input type="text" className="plan-name" name="courseName" required onChange={handleChange}/>

                <h1 className="year-commencement">Year of commencement</h1>
                  <select className="commencement-year" name="commencementYear" required onChange={handleChange}>
                    <option value="2018">2018</option >
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </select>

                <h1 className="study-load" >Study load</h1>
                  <select className="study-load" name="studyLoad" required onChange={handleChange}>
                    <option value="full-time-study">Full-Time</option>

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

                    <button type="button" className="create-plan-button" onClick={()=>{handleSubmit(); history('/specialisation', {state: {userInfo}});}}>
                      Submit
                    </button>
             </form>
            </div>

        </div> 

    </div>
  )


 
}

export default NewCourseMap