import { createSlice } from "@reduxjs/toolkit";
import { sumItems } from "../../utils/functions";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
      state.totalPrice = sumItems(state.selectedItems).totalPrice;
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = [...newSelectedItems];
      state.itemsCounter = sumItems(newSelectedItems).itemsCounter;
      state.totalPrice = sumItems(newSelectedItems).totalPrice;
    },
    increase: (state, action) => {
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
      state.totalPrice = sumItems(state.selectedItems).totalPrice;
    },
    decrease: (state, action) => {
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
      state.totalPrice = sumItems(state.selectedItems).totalPrice;
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.totalPrice = 0;
      state.checkout = true;
    },
    clear: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.totalPrice = 0;
      state.checkout = false;
    },
  },
});

// reducers
export default cartSlice.reducer;

// actions
export const { addItem, removeItem, increase, decrease, checkout, clear } =
  cartSlice.actions;
