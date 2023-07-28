import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Get the initial dark theme value from cookies
const initialStateValue = Cookies.get("darkTheme")
  ? JSON.parse(Cookies.get("darkTheme"))
  : false;

const initialState = {
  value: initialStateValue,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: (state, action) => {
      state.value = action.payload;
    },
    dark: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { light, dark } = themeSlice.actions;

export default themeSlice.reducer;
