export const updateValue = (index, newValue) => {
  return {
    type: "UPDATE_VALUE",
    data: {
      index,
      newValue,
    },
  };
};
export const semesterOne = (info) => {
  return {
    type: "SEMESTER_ONE",
    data: {
      info,
    },
  };
};
export const changeCourse = (course) => {
  return {
    type: "CHANGE_COURSE",
    data: {
      course,
    },
  };
};
export const swapValue = (oldIndex, newIndex) => {
  return {
    type: "SWAP_VALUE",
    data: {
      oldIndex,
      newIndex,
    },
  };
};

export const updateEvent = ({ id, item }) => ({
  type: "item",
  data: { id, item },
});
