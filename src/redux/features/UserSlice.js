import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.user = {};
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
