import React, { useState } from "react";
import Left from "./left";
import Right from "./right";
// import { LeftOutlined } from "@ant-design/icons";
import "./index.css";
import { useNavigate } from "react-router-dom";


export default function Index() {
  const [value, setValue] = useState({ code: "" });
  const history = useNavigate();  

  return (

    <div className="search-main">

    <MyContext.Provider value={{ value, setValue }}>
      <div style={{ margin: "0 100px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Left></Left>

          <Right></Right>
        </div>

      </div>
    </MyContext.Provider>


    </div>
  );
}
export const MyContext = React.createContext();
