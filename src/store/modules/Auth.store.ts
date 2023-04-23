//* Importing the createSlice function from the Redux Toolkit library
import { createSlice } from "@reduxjs/toolkit";

//* Creating a new slice of state called authState using createSlice function
const authState = createSlice({
  name: "authState",
  initialState: {
    token: "",
    logged: false,
    userEmail: "",
  },
  reducers: {
    //* A reducer function to set the user as logged in with the user email
    beLogged: (state, action) => {
      state.logged = true;
      state.userEmail = action.payload;
    },
    //* A reducer function to set the user as logged out
    beUnlogged: (state) => {
      state.logged = false;
      state.userEmail = "";
    },

    //* A reducer function to set the token in the state
    setToken: (state, action) => {
      state.token = action.payload;
    },

    //* A reducer function to clear the token from the state
    clearToken: (state) => {
      state.token = "";
    },
  },
});

//* Exporting the action creators from the slice
export const { beLogged, beUnlogged, setToken, clearToken } = authState.actions;

//* Exporting the reducer function from the slice
export default authState.reducer;
