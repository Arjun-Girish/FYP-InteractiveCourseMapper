import React, { useContext } from "react";
// import { InfoCircleOutlined } from "@ant-design/icons";
import { MyContext } from "./index";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { updateEvent } from "../../store/actions";

function Right({ updateEvent, event, data }) {
  const { value } = useContext(MyContext);
  const { id } = useParams();
  const { name } = useParams();
  console.log(value,'---value');
  const filteredList = data.filter((item) => {
    if (value[Object.keys(value)[0]] === "") {
      return "";
    }
    return (
      item[Object.keys(value)[0]]
        .toLowerCase()
        .includes(value[Object.keys(value)[0]].toLowerCase()) &&
      item.state === value.state
    );
  });

  const Change = (item) => {
    item.id = id * 1 + 1;
    // item.name = name;
    console.log(item, "updateEvent-------");
    alert("unit added");
    updateEvent(item);
  };

  return (
    <div className="right">
      <p className="right-text">Showing results for Semester 2:</p>
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
              <div className="unit-code" title={item.name}>
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({data: state.data, event: state.event }), //映射状态
  { updateEvent } //映射操作状态的方法
)(Right);
