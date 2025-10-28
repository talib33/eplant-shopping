import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (!existingItem) {
        const tempProductItem = {
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        };
        state.cart.push(tempProductItem);
      } else {
        alert("already add in cart");
        return;
      }

      state.totalQuantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);

      state.totalQuantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    incrementCart(state, action) {
      const item = state.cart.find((x) => x.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }

      // ✅ Update totals
      state.totalQuantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    decreaseCart(state, action) {
      const item = state.cart.find((x) => x.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
      }

      // ✅ Update totals
      state.totalQuantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    clearCart(state) {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
