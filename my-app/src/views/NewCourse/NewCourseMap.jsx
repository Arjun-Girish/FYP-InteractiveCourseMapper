import React, {useState} from "react";
import './NewCourseMap.css';

const NewCourseMap = () => {

  return(
    <div className="main-content">
        <div className="form-container">
        <div className="title-container">
        <h1 className="create-plan">Create new course map!</h1>
        </div>  
          <form>
            <h1 className="course-name">Name your plan</h1>
              <input type="text" className="plan-name" required />
            <h1 className="year-commencement">Year of commencement</h1>
              <select className="commencement-year"  required>
                <option value="2018-start">2018</option>
                <option value="2019-start">2019</option>
                <option value="2020-start">2020</option>
                <option value="2021-start">2021</option>
                <option value="2022-start">2022</option>
                <option value="2023-start">2023</option>
              </select>
            <h1 className="study-load" >Study load</h1>
              <select className="study-load"  required>
                <option value="full-time-study">Full-Time</option>
              </select>
            <h1 className="year-12-units">Which Year 12 Unit(s) have you completed?</h1>
              <div className="checkbox-container">
                <input type="checkbox" name="maths" id="maths-34" />
                <label htmlFor="maths-34">VCE Specialist Mathemathics 3/4</label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" name="physics" id="physics-34" />
                <label htmlFor="physics-34">VCE Physics 3/4</label>
              </div>
                <button type="submit" className="create-plan-button" >
                  Submit
                </button>
          </form>
        </div> 
    </div>
  )


 
}

export default NewCourseMap