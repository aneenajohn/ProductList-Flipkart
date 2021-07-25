export const productReducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payLoad };
    case "GENDER":
      return { ...state, idealFor: action.payLoad };
    case "TOGGLE_INVENTORY":
      return { ...state, showInventoryAll: !state.showInventoryAll };

    case "TOGGLE_DELIVERY":
      return { ...state, showFastDeliveryOnly: !state.showFastDeliveryOnly };

    case "CLEAR_FILTER":
      return {
        ...state,
        sortBy: null,
        showInventoryAll: "All",
        showFastDeliveryOnly: false
      };
    default:
      return { state };
  }
};
