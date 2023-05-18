export const updateValue = (index, newValue) => {
  return {
    type: "UPDATE_VALUE",
    data: {
      index,
      newValue,
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

export const updateEvent = (data) => ({ type: "item", data });
