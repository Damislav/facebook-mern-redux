import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
// import { themeReducer } from "./themeReducer";
// ¸import usersReducer from "../redux/features/userSlice";
import themeSlice from "../redux/features/themeSlice";

const rootReducer = combineReducers({
  user: userReducer,
  // darkTheme: themeReducer,

  //rtoolkit
  // users: usersReducer,
  darkTheme: themeSlice,
});

export default rootReducer;
