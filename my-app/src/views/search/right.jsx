import React, { useContext } from "react";
// import { InfoCircleOutlined } from "@ant-design/icons";
import { MyContext } from "./index";
import { data } from "./data";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { updateEvent } from "../../store/actions";

function Right({ updateEvent, event }) {
  const { value } = useContext(MyContext);
  const { id } = useParams();
  const {name} = useParams();

  const filteredList = data.filter((item) => {
    if (value[Object.keys(value)[0]] === "") {
      return "";
    }
    return item[Object.keys(value)[0]].includes(value[Object.keys(value)[0]]);
  });

  const Change = (item) => {
    item.id = id;
    item.name = name;
    alert("unit added")
    updateEvent(item);
    console.log(item.name)
  };
  
  return (
    <div className="right">
      <p>Showing results for Semester 2:</p>
      <div className="cards">

        {filteredList?.map((item, index) => (
          <div
            key={item.code + index}
            onClick={() => {
              Change(item);
              console.log(item.code)
              console.log(item.id)
            }}
          >
            <div style={{marginTop:'12px'}}>
              <span style={{ fontSize: "16px" }}>{item.code}</span>
              <br />
              <span>{item.name}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({ event: state.event }), //映射状态
  { updateEvent } //映射操作状态的方法
)(Right);
import React, { useContext } from "react";
// import { InfoCircleOutlined } from "@ant-design/icons";
import { MyContext } from "./index";
import { data } from "./data";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { updateEvent } from "../../store/actions";

function Right({ updateEvent, event }) {
  const { value } = useContext(MyContext);
  const { id } = useParams();
  const {name} = useParams();

  const filteredList = data.filter((item) => {
    if (value[Object.keys(value)[0]] === "") {
      return "";
    }
    return item[Object.keys(value)[0]].includes(value[Object.keys(value)[0]]);
  });

  const Change = (item) => {
    item.id = id;
    item.name = name;
    alert("unit added")
    updateEvent(item);
    console.log(item.name)
  };
  
  return (
    <div className="right-search">
      <p>Showing results for Semester 2:</p>
      <div className="cards">

        {filteredList?.map((item, index) => (
          <div
            key={item.code + index}
            onClick={() => {
              Change(item);
              console.log(item.code)
              console.log(item.id)
            }}
          >
            <div style={{marginTop:'12px'}}>
              <span style={{ fontSize: "12px" }}>{item.code}</span>
              <br />
              <span style={{ fontSize: "12px" }}>{item.name}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({ event: state.event }), //映射状态
  { updateEvent } //映射操作状态的方法
)(Right);
