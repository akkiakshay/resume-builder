import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
   experienceList: [],
}

export const experienceSlice = createSlice({
  name: "experience",
initialState,
  reducers: {
    submitExp: (state, action) => {
        state.experienceList = action.payload.experienceList;
    },
  },
});

export const { submitExp } = experienceSlice.actions;



export default experienceSlice.reducer;
