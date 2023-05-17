import React, { useState, useContext } from "react";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { MyContext } from "./index";
import "./index.css";

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

  return (
    <div className="left">
      <p>Search by unit code</p>
      <input type="text" onChange={handleInputChange1} />{" "}
      <button
        onClick={() => {
          handleButtonClick("code");
        }}
      >
        search
      </button>
      <p>Search by Course title</p>
      <input type="text" onChange={handleInputChange2} />{" "}
      <button
        onClick={() => {
          handleButtonClick("name");
        }}
      >
        search
      </button>
      <p>Filter by</p>
      <span>Major & Minor</span>
      <br />
      <Select
        open={mode[0]}
        // suffixIcon={<CaretDownOutlined />}
        defaultValue=""
        style={{
          width: 238,
        }}
        onChange={handleChange}
        options={[
          {
            value: "3",
            label: "state3",
          },
          {
            value: "4",
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
      <p>Learning Outcomes</p>
      <Select
        open={mode[2]}
        defaultValue=""
        style={{
          width: 238,
        }}
        onChange={handleChange}
        options={[
          {
            value: "ja",
            label: "a",
          },
          {
            value: "b",
            label: "b",
          },
          {
            value: "Yiminghe",
            label: "c",
          },
          {
            value: "disabled",
            label: "Disabled",
            disabled: true,
          },
        ]}
      />
      <div
        className="select"
        onClick={() => {
          const newModes = [...mode];
          newModes[2] = !newModes[2];
          setMode(newModes);
        }}
      >
        <CaretDownOutlined />
      </div>
      <button>search</button>
    </div>
  );
}
