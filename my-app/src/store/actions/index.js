export const updateValue = (index, newValue) => {
  return {
    type: "UPDATE_VALUE",
    data: {
      index,
      newValue,
    },
  };
};


export const updateEvent = (data) => ({ type: "item", data });
