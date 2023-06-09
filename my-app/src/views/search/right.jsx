import React, { useContext } from "react";
// import { InfoCircleOutlined } from "@ant-design/icons";
import { MyContext } from "./index";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateEvent } from "../../store/actions";

function Right({ updateEvent, event, data }) {
  const { value } = useContext(MyContext);
  const { id } = useParams();
  const history = useNavigate();
  // const { name } = useParams();
  // console.log(value,typeof value.state, "--value");
  const filteredList = data.filter((item) => {
    if (value[Object.keys(value)[0]] === "" && !value.state) {
      return "";
    }
    return (
      item[Object.keys(value)[0]]
        ?.toLowerCase()
        .includes(value[Object.keys(value)[0]]?.toLowerCase()) &&
      (typeof value.state === "number"
        ? value.state === 2
          ? item.state >= 10
          : value.state === 4
          ? item.state === 3
          : item.state ===3 || item.state >=10
        : item.sem ===
            (value.state.sem === "a" ? 1 : value.state.sem === "b" ? 2 : 0) &&
          item.state === value.state.sta)
    );
  });
  const Change = (item) => {
    // item.name = name;
    // alert("unit added");
    updateEvent({ id, item });
  };

  return (
    <div className="right">
      <p className="right-text">Showing results：</p>
      <div className="cards">
        {filteredList.length !== 0 ? (
          filteredList.map((item, index) => {
            return (
              <div
                key={item.code + index}
                tabIndex={index}
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
            );
          })
        ) : value[Object.keys(value)[0]] === "" && !value.state ? (
          " "
        ) : (
          <p style={{ color: "red", marginLeft: "30px" }}>No result find</p>
        )}
      </div>
      <button
        className="left-search-button"
        style={{ float: "right" }}
        onClick={() => history(-1)}
      >
        add
      </button>
    </div>
  );
}

export default connect(
  (state) => ({ data: state.data, event: state.event }), //映射状态
  { updateEvent } //映射操作状态的方法
)(Right);
