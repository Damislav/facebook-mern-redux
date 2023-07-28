import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./styles/icons/icons.css";
import "./styles/dark.css";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(rootReducer, composeWithDevTools());

//redux toolkit
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
