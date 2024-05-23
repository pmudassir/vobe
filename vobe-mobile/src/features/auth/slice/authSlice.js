import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  phone: "",
  firstName: "",
  lastName: "",
  id: "",
  type: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = !!action.payload.accessToken;
      state.accessToken = action.payload.accessToken;
      state.phone = action.payload.phone;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.id = action.payload.id;
      state.type = action.payload.type;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.phone = "";
      state.firstName = "";
      state.lastName = "";
      state.id = "";
      state.type = "";
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer