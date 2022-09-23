import { createSlice } from "@reduxjs/toolkit";

const USER_INITIAL_STATE = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      const { payload } = action;
      return { ...state, currentUser: payload };
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
