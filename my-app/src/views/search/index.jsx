import React, { useState } from "react";
import Left from "./left";
import Right from "./right";
// import { LeftOutlined } from "@ant-design/icons";
import "./index.css";

export default function Index() {
  const [value, setValue] = useState({ code: "" });
  return (

    <MyContext.Provider value={{ value, setValue }}>
      <div style={{ margin: "0 100px ", width:'100%' }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Left></Left>
          <Right></Right>
        </div>
      </div>
    </MyContext.Provider>
  );
}
export const MyContext = React.createContext();
