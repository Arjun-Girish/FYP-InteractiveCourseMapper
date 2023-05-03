import React, { useState } from "react";
import "./hero.css";
import CloseIcon from '@mui/icons-material/Close';

const Hero = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Proceed with your logic for submit action
    window.location.href = "/specialisationpage";
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
              <input type="text" className="plan-name" required />
            <h1 className="modal-year-commencement">Year of commencement</h1>
              <select className="commencement-year" required>
                <option value="2018-start">2018</option>
                <option value="2019-start">2019</option>
                <option value="2020-start">2020</option>
                <option value="2021-start">2021</option>
                <option value="2022-start">2022</option>
                <option value="2023-start">2023</option>
              </select>
            <h1 className="modal-study-load">Study load</h1>
              <select className="study-load" required>
                <option value="full-time-study">Full-Time</option>
              </select>
            <h1 className="year-12-units">Which Year 12 Unit(s) have you completed?</h1>
              <div>
                <input type="checkbox" required />
                <label htmlFor="maths-34">VCE Specialist Mathemathics 3/4 </label>
              </div>
              <div>
                <input type="checkbox" required />
                <label htmlFor="physics-34">VCE Physics 3/4 </label>
              </div>
              <div>
                <input type="checkbox" required />
                <label htmlFor="none">None of the above </label>
              </div>
              <a href="/specialisationpage">
                <button type="submit" className="create-plan-button">
                  Submit
                </button>
              </a>
              
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;