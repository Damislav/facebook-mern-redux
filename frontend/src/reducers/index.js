import { combineReducers } from "redux";

import usersReducer from "../redux/features/userSlice";
import themeSlice from "../redux/features/themeSlice";

const rootReducer = combineReducers({
  //rtoolkit
  user: usersReducer,
  darkTheme: themeSlice,
});

export default rootReducer;
