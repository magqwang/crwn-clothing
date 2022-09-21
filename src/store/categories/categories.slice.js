import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      console.log("setCategories reducer");
      const { payload } = action;
      return { ...state, categories: payload };
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
