import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Get the initial user value from cookies
const initialState = Cookies.get("user")
  ? JSON.parse(Cookies.get("user"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return null;
    },
    updatePicture: (state, action) => {
      return { ...state, picture: action.payload };
    },
    verify: (state, action) => {
      return { ...state, verified: action.payload };
    },
  },
});

export const { loginUser, logout, updatePicture, verify } = userSlice.actions;

export default userSlice.reducer;
