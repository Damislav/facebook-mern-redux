import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";
import usersReducer from "../redux/features/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  darkTheme: themeReducer,

  //rtoolkit
  users: usersReducer,
});

export default rootReducer;
