import React, { useState, useContext } from 'react';
import { FormContext } from '../../utils/FormContext';
import "./hero.css";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const [modal, setModal] = useState(false);
  const { formData, setFormData } = useContext(FormContext);

  const toggleModal = () => {
    setModal(!modal);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      planName: e.target.elements['plan-name'].value,
      commencementYear: e.target.elements['commencement-year'].value,
      studyLoad: e.target.elements['study-load'].value,
      completedUnits: {
        maths: e.target.elements['maths'].checked,
        physics: e.target.elements['physics'].checked,
      },
    });
  
    navigate('/specialisationpage');
  };
  

  return (
    <div className="hero-container">
      <button 
      onClick={toggleModal}
      className="btn-modal">
        Create a new course plan
      </button>

      <button className="btn-modal">
        View saved course plans
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <button className='close-modal'onClick={toggleModal}>
              <CloseIcon className="close-icon" fill="currentColor"/>
            </button>
            <h1 className="create-plan">Create your new course plan</h1>
            <form onSubmit={handleSubmit}>
            <h1 className="modal-course-name">Name your plan</h1>
              <input type="text" className="plan-name" name="plan-name" required />
            <h1 className="modal-year-commencement">Year of commencement</h1>
              <select className="commencement-year" name="commencement-year" required>
                <option value="2018-start">2018</option>
                <option value="2019-start">2019</option>
                <option value="2020-start">2020</option>
                <option value="2021-start">2021</option>
                <option value="2022-start">2022</option>
                <option value="2023-start">2023</option>
              </select>
            <h1 className="modal-study-load" >Study load</h1>
              <select className="study-load" name="study-load" required>
                <option value="full-time-study">Full-Time</option>
              </select>
            <h1 className="year-12-units">Which Year 12 Unit(s) have you completed?</h1>
              <div>
                <input type="checkbox" name="maths"/>
                <label htmlFor="maths-34">VCE Specialist Mathemathics 3/4 </label>
              </div>
              <div>
                <input type="checkbox" name="physics"/>
                <label htmlFor="physics-34">VCE Physics 3/4 </label>
              </div>
                <button type="submit" className="create-plan-button" >
                  Submit
                </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;