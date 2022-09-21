import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("nextState: ", store.getState());
};

// function loggerMiddleware(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: [loggerMiddleware],
});
