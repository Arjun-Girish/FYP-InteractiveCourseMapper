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
    item.id = id*1+1;
    // item.name = name;
    console.log(item,'updateEvent-------');
    alert("unit added")
    updateEvent(item);
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
            }}
          >
            <div style={{}}>
              <div style={{ fontSize: "16px" }}>{item.code}</div>
              <div className="unit-code" title={item.name}>{item.name}</div>
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
