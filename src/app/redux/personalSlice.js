import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: "",
    email: "",
    mobile: "",
    designation: "",
}

export const personalSlice = createSlice({
  name: "personal",
initialState,
  reducers: {
    submit: (state, action) => {
        
        state.fullName = action.payload.fullName;
        state.email = action.payload.email;
        state.mobile = action.payload.mobile;
        state.designation = action.payload.designation;
    },
  },
});

export const { submit } = personalSlice.actions;



export default personalSlice.reducer;
