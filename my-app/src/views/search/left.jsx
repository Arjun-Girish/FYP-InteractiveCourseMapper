import React, { useState, useContext } from "react";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { MyContext } from "./index";
import "./index.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Left() {
  const { state } = useLocation();
  const { setValue } = useContext(MyContext);
  let [mode, setMode] = useState([false, false, false, false]);
  let [num, setNum] = useState(state);
  let [search, setSeach] = useState({});
  const handleChange = (mode, value) => {
    console.log("selected", mode, value);
    // setNum(value);
    search[mode] = value;
    setSeach(search);
    setMode([false, false, false, false]);
  };

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
    console.log({ [index]: inputValue[index], state: num });
    setValue({ [index]: inputValue[index], state: num });
  };
  const handelSearch = () => {
    setValue({ code: '', state: search });
  };
  return (
    <div className="left">
      <p>Search by unit code</p>

      <div className="form-container">
        <input type="text" onChange={handleInputChange1} />{" "}
        <button
          className="left-search-button"
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
        <button
          className="left-search-button"
          onClick={() => {
            handleButtonClick("name");
          }}
        >
          Search
        </button>
      </div>

      <p>Filter by</p>
      <span>Minor or elective</span>
      <br />

      <Select
        className="filter"
        open={mode[0]}
        // suffixIcon={<CaretDownOutlined />}
        defaultValue=""
        style={{
          width: 238,
        }}
        onChange={(value) => handleChange("sta", value)}
        options={[
          {
            value: 10,
            label: "Engineering Technical elective",
          },
          {
            value: 11,
            label: "Artificial intelligence in engineering",
          },
          {
            value: 12,
            label: "Civil engineering",
          },
          {
            value: 13,
            label: "Computational engineering",
          },
          {
            value: 14,
            label: "Engineering entrepreneurship",
          },
          {
            value: 15,
            label: "Environmental engineering",
          },
          {
            value: 16,
            label: "Mining engineering",
          },
          {
            value: 17,
            label: "Micro and nano technologies",
          },
          {
            value: 18,
            label: "Renewable energy engineering",
          },
          {
            value: 19,
            label: "Smart manufacturing",
          },
          {
            value: 20,
            label: "Sustainable engineering",
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
        defaultValue="c"
        style={{
          width: 238,
        }}
        onChange={(value) => handleChange("sem", value)}
        options={[
          {
            value: "a",
            label: "Semester 1",
          },
          {
            value: "b",
            label: "Semester 2",
          },
          {
            value: "c",
            label: "All Semester",
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
        <button className="back-button-search" onClick={() => history(-1)}>
          Back
        </button>
        <button className="left-search-button" onClick={handelSearch}>
          {" "}
          Search
        </button>
      </div>
    </div>
  );
}
