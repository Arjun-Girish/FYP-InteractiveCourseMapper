import { logDOM } from "@testing-library/react";
import { combineReducers } from "redux";
import json from "../../AEROENG04.json";
let dataState = json.core_units;
function data(preState = dataState, action) {
  let { type, data } = action;
  switch (type) {
    case "UPDATE_VALUE":
      const newState = [...preState];
      newState[data.index] = data.newValue;
      return newState;
    case "SWAP_VALUE":
      const newList = [...preState];
      const swap = newList[data.oldIndex];
      newList[data.oldIndex] = newList[data.newIndex];
      newList[data.newIndex] = swap;
      return newList;
    default:
      return preState;
  }
}

let eventState = {};
function event(preState = eventState, action) {
  let { type, data } = action;
  switch (type) {
    case "item":
      const newData = { id: data.id*1, item: data.item };
      return newData;
    default:
      return preState;
  }
}
export default combineReducers({
  data,
  event,
});
