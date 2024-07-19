export const filterData = (category) => {
  return {
    type: "filter_data",
    payload: { category },
  };
};
export const switchItem = (direction) => {
  return {
    type: "switch_item",
    payload: direction === "left" ? -1 : 1,
  };
};
export const removeItem = (itemId) => ({
  type: "remove_item",
  payload: {
    id: itemId,
  },
});

export const updateItem = (itemId, quantity) => ({
  type: "update_item",
  payload: {
    id: itemId,
    quantity,
  },
});
export const themeColors = (themeColor, toolColor) => ({
  type: "theme_color",
  payload: { themeColor, toolColor },
});
export const updateAccount = (firstName, lastName, password, phone, email) => ({
  type: "update_account",
  payload: { firstName, lastName, password, phone, email },
});
