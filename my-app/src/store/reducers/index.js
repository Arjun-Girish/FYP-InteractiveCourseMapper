import { combineReducers } from "redux";

let dataState = [
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
  {
    id: "",
    code: "",
    name: "",

  },
];
function data(preState = dataState, action) {
  let { type, data } = action;
  switch (type) {
    case 'UPDATE_VALUE':
      const newState = [...preState];
      newState[data.index] = data.newValue;
      return newState;
    default:
      return preState;
  }
}
let eventState = {};
function event(preState = eventState, action) {
  let { type, data } = action;
  switch (type) {
    case 'item':
      return data;
    default:
      return preState;
  }
}
export default combineReducers({
  data,
  event,
});
