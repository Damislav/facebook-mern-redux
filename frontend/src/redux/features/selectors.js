import { createSelector } from "@reduxjs/toolkit";

// Assuming the root state has the following structure:
// {
//   user: {...},
//   darkTheme: true,
//   ...other properties
// }

// Create memoized selectors
const userSelector = (state) => state.user;
const darkThemeSelector = (state) => state.darkTheme;

// Use createSelector to memoize the selectors
export const memoizedUserSelector = createSelector(
  [userSelector],
  (user) => user
);

export const memoizedDarkThemeSelector = createSelector(
  [darkThemeSelector],
  (darkTheme) => darkTheme
);
