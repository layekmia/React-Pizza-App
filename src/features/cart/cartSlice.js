import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      if (
        !state.cart.map((item) => item.pizzaId).includes(action.payload.pizzaId)
      ) {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((ietm) => ietm.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // if (item.quantity > 1) {
      //   item.quantity--;
      //   item.totalPrice = item.quantity * item.unitPrice;
      // }
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
export const totalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const totalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity || 0;
