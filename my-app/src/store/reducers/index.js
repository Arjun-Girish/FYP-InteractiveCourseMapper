import { combineReducers } from "redux";
import json from "../../AEROENG04.json";
import semone from "../../vce_condition.json";
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
    case "SEMESTER_ONE":
      let newData = [...preState];
      if (data.info.vceUnitsMaths && data.info.vceUnitsPhysics) {
        newData = [...semone.FY11, ...newData];
      } else if (data.info.vceUnitsMaths) {
        newData = [...semone.FY10, ...newData];
      } else if (data.info.vceUnitsPhysics) {
        newData = [...semone.FY01, ...newData];
      } else {
        newData = [...semone.FY00, ...newData];
      }
      return newData;
    case "CHANGE_COURSE":
      let newcourse = preState.slice(0, 8);
      console.log(newcourse);
      const newCourse = [...newcourse, ...data.course.core_units];
      return newCourse;
    default:
      return preState;
  }
}

let eventState = {};
function event(preState = eventState, action) {
  let { type, data } = action;
  switch (type) {
    case "item":
      const newData = { id: data.id * 1, item: data.item };
      return newData;
    default:
      return preState;
  }
}
export default combineReducers({
  data,
  event,
});
