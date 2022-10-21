import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categoriesArray = await getCollectionAndDocuments();
    return categoriesArray;
  }
);

const CATEGORIES_INITIAL_STATE = {
  isLoading: false,
  categories: [],
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.categories = [];
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
