import React, { useState, useContext } from "react";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { MyContext } from "./index";
import "./index.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Left() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setNum(value * 1);
    setMode([false, false, false, false]);
  };
  let [mode, setMode] = useState([false, false, false, false]);
  let [num, setNum] = useState(0);
  const { setValue } = useContext(MyContext);
  const [inputValue, setInputValue] = useState({
    code: "",
    name: "",
    input3: "",
  });
  
  const history = useNavigate();  

  const handleInputChange1 = (event) => {
    setInputValue({ ...inputValue, code: event.target.value });
  };
  const handleInputChange2 = (event) => {
    setInputValue({ ...inputValue, name: event.target.value });
  };

  const handleButtonClick = (index) => {
    console.log(index);
    setValue({ [index]: inputValue[index],state: num });
  };

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

          <p>Search by course title</p>

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

      <Select className = "filter"
        open={mode[0]}
        // suffixIcon={<CaretDownOutlined />}
        defaultValue=""
        style={{
          width: 238,
        }}
        onChange={handleChange}
        options={[
          {
            value: 3,
            label: "state3",
          },
          {
            value: 4,
            label: "state4",
          },
        ]}
      />
      <div
        className="select"
        onClick={() => {
          const newModes = [...mode];
          newModes[0] = !newModes[0];
          setMode(newModes);
        }}
      >
        <CaretDownOutlined />
      </div>
      <p>Teaching Period</p>
      <Select
        open={mode[1]}
        defaultValue=""
        style={{
          width: 238,
        }}
        onChange={handleChange}
        options={[
          {
            value: "a",
            label: "Semester 1",
          },
          {
            value: "b",
            label: "Semester 2",
          },
        ]}
      />
      <div
        className="select"
        onClick={() => {
          const newModes = [...mode];
          newModes[1] = !newModes[1];
          setMode(newModes);
        }}
      >
        <CaretDownOutlined />
      </div>
     
      <div className="bottom-container-left">
      <button className="back-button-search" onClick={() => history(-1)}>Back</button>
      <button className = "left-search-button" > Search</button>

      </div>
    </div>
  );
}
