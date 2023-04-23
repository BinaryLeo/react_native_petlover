//* Importing necessary dependencies from Redux Toolkit and React Redux libraries
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { useDispatch } from "react-redux";

//* Importing the authState reducer from the Auth.store module
import authStateReducer from "./modules/Auth.store";

//* Combining all reducers into a single root reducer using combineReducers function
const rootReducers = combineReducers({
  authState: authStateReducer,
});

//* Configuring the store with the root reducer and custom middleware
const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

//* Defining the type for the RootState, AppDispatch, and AppThunk
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

//* Exporting the store as the default export of the module
export default store;
