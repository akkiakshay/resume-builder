import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
   educationList: [],
}

export const educationSlice = createSlice({
  name: "education",
initialState,
  reducers: {
    submit: (state, action) => {
        state.educationList = action.payload.educationList;
    },
  },
});

export const { submit } = educationSlice.actions;



export default educationSlice.reducer;
