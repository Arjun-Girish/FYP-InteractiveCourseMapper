import React, { useState, useContext } from "react";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { MyContext } from "./index";
import "./index.css";
import { useNavigate, useLocation } from "react-router-dom";



export default function Left() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setMode([false, false, false, false]);
  };
  let [mode, setMode] = useState([false, false, false, false]);
  const { setValue } = useContext(MyContext);
  const [inputValue, setInputValue] = useState({
    code: "",
    name: "",
    input3: "",
  });

  const location = useLocation();
  const yearState = location.state.show
  console.log(yearState)


  
  const handleInputChange1 = (event) => {
    setInputValue({ ...inputValue, code: event.target.value });
  };
  const handleInputChange2 = (event) => {
    setInputValue({ ...inputValue, name: event.target.value });
  };

  const handleButtonClick = (index) => {
    console.log(index);
    setValue({ [index]: inputValue[index] });
  };

  const history = useNavigate();  


  return (
    <div className="left">
      <p>Search by unit code</p>

      <div className="form-container">

      <input type="text" onChange={handleInputChange1} />{" "}
      <button className = "left-search-button"
        onClick={() => {
          handleButtonClick("code");
        }}
      >
        Search
      </button>

      </div>

      <p>Search by Course title</p>

      <div className="form-container">

      <input type="text" onChange={handleInputChange2} />{" "}
      <button className = "left-search-button"
        onClick={() => {
          handleButtonClick("name");
        }}
      >
        Search
      </button>

      </div>

      <p>Filter by</p>
      <span>Major & Minor</span>
      <br />

      <select className="major-minor-option" name="major-minor-option" required onChange={handleChange}>
        <option value="blank"></option >
        <option value="major-option">Major</option >
        <option value="minor-option">Minor</option>
      </select>


      <div
        className="select"
        onClick={() => {
          const newModes = [...mode];
          newModes[0] = !newModes[0];
          setMode(newModes);
        }}
      >
      </div>

      <p>Teaching Period</p>
     <select className="sem-option" name="sem-option" required onChange={handleChange}>
        <option value="blank"></option >
        <option value="sem1-option">Semester 1</option >
        <option value="sem2-option">Semester 2</option>
      </select>

      <div
        className="select"
        onClick={() => {
          const newModes = [...mode];
          newModes[1] = !newModes[1];
          setMode(newModes);
        }}
      >
      </div>
    
      

      
      <div className="bottom-container-left">
      <button className="back-button-search" onClick={() => history(-1, {state: yearState})}>Back</button>
      <button className = "left-search-button" > Search</button>

      </div>



      
    </div>
  );
}
