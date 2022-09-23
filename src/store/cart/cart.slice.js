import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      const { payload } = action;
      return { ...state, isCartOpen: payload };
    },
    addItemToCart(state, action) {
      const { payload } = action;
      const newCartItems = addCartItem(state.cartItems, payload);
      return { ...state, cartItems: newCartItems };
    },
    removeItemFromCart(state, action) {
      const { payload } = action;
      const newCartItems = removeCartItem(state.cartItems, payload);
      return { ...state, cartItems: newCartItems };
    },
    clearItemFromCart(state, action) {
      const { payload } = action;
      const newCartItems = clearCartItem(state.cartItems, payload);
      return { ...state, cartItems: newCartItems };
    },
  },
});

export const {
  setIsCartOpen,
  setCartItems,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
