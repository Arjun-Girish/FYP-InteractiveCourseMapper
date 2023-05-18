import React, {useState} from "react";
import './NewCourseMap.css';
import logo from './monash-m.logo.jpg';
import { useNavigate } from "react-router-dom";

const NewCourseMap = () => {

  const [userInfo,setUserInfo] = useState({
    courseName: null,
    commencementYear: null,
    studyLoad: null,
    vceUnitsMaths: null,
    vceUnitsPhysics: null,
    specialisation: null,
  });

  if (userInfo.vceUnitsPhysics === "on"){
    userInfo.vceUnitsPhysics = true
  }

  if (userInfo.vceUnitsMaths === "on"){
    userInfo.vceUnitsMaths = true
  }


  const history = useNavigate();
    
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const handleSubmit = (e) => {
    console.log(userInfo);

    if (userInfo.courseName==null)
    {
      setError1(true)
      history('/')
    }

    else if (userInfo.commencementYear==null)
    {
      setError2(true)
      history('/')
    }

    if (userInfo.commencementYear==null && userInfo.courseName==null )
    {
      setError1(true)
      setError2(true)
      history('/')
    }

    if (userInfo.courseName !=null )
    {
      setError1(false)
      history('/')
    }

    if (userInfo.commencementYear !=null)
    {
      setError2(false)
      history('/')
    }

    if (userInfo.commencementYear !=null && userInfo.courseName != null) {
      history('/specialisation', {state: {userInfo}})
      setError1(false)
      setError2(false)
    }

  };



  return(
    <div className="main-content">



        <div className="form-container">

          <div className="image-container">
            <img className = "new-course-logo" alt = "monash-m-logo" src={logo}></img>
          </div>

          <div className="form"> 

            <div className="title-container">
              <h1 className="create-plan">Create a new course map</h1>

            </div>  

            <form onChange={handleChange}> 

                <div className="required-container">
                  <h1 className="course-name">Name your plan</h1> 
                  {error1?
                  <label className="required"> *(Required)</label>:""}
                </div>

                  <input type="text" className="plan-name" name="courseName" required onChange={e=>handleChange} />

                <div className="required-container">
                  <h1 className="year-commencement">Year of commencement</h1>

                  {error2?
                  <label className="required"> *(Required)</label>:""}
                </div>

                  <select className="commencement-year" name="commencementYear" required onChange={e=>handleChange}>
                    <option value="blank"></option >
                    <option value="2018">2018</option >
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </select>

                <h1 className="study-load" >Study load</h1>
                  <select className="study-load" name="studyLoad" required >
                    <option value="full-time-study">Full-Time</option>

                  </select>

                  <div className="year-12-container">
                    

                <h1 className="year-12-units">Which Year 12 Unit(s) have you completed?</h1>

                  <div className="checkbox-container">
                    <input type="checkbox" id="maths-34" name="vceUnitsMaths" onChange={e=>handleChange}/>
                    <label className="checkbox-vce">VCE Specialist Mathematics 3/4</label> 
                    <p1 className = "required-12">* Study Score > 30 </p1>
                  </div>

                  <div className="checkbox-container">
                    <input type="checkbox" id="physics-34" name="vceUnitsPhysics" onChange={e=>handleChange}/>
                    <label className="checkbox-vce">VCE Physics 3/4</label>  
                    <p1 className = "required-12"> * Study Score > 25 </p1>
                  </div>

                  </div>


                  <div className="button-container-course">

                    <button type="button" className="create-plan-button" onClick={()=>{handleSubmit()}}>
                      Submit
                    </button>
                  </div>
                    
             </form  >
            </div>

        </div> 

    </div>
  )


 
}

export default NewCourseMap