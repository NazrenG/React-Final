import database from "../../dbApiJson";

const initialState = {
  cart: [],
  accounts: {
    id: 1,
    firstName: "admin",
    lastName: "admin",
    password: "1111",
    phone: "123-12-13",
    email: "admin@gmail.com",
  },

  productCount: 0,
  currentFoodIndex: 0,
  currentCategory: `BreakFast`,
  filterFood: database.BreakfastFood,
  themeColor: "#ffeede",
  toolColor: "#ff922c",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_item":
      if (state.cart.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
          productCount: state.productCount + 1,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case "remove_item":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        productCount: state.productCount - 1,
      };
    case "update_item":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: --action.payload.quantity }
            : item
        ),
        productCount: state.productCount - 1,
      };
    case "filter_data":
      const { category } = action.payload;
      return {
        ...state,
        currentCategory: category,
        filterFood: database[`${category}Food`],
        currentFoodIndex: 0,
      };

    case "switch_item":
      return {
        ...state,
        currentFoodIndex:
          (state.currentFoodIndex + action.payload + state.filterFood.length) %
          state.filterFood.length,
      };

    case "theme_color":
      return {
        ...state,
        themeColor: action.payload.themeColor,
        toolColor: action.payload.toolColor,
      };

    case "update_account":
      return {
        ...state,

        accounts: {
          ...state.accounts,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
