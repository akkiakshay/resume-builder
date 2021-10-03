import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
   skillsList: [],
}

export const skillsSlice = createSlice({
  name: "skills",
initialState,
  reducers: {
    submit: (state, action) => {
        console.log(action.payload)
        state.skillsList = action.payload.skillsList;
    },
  },
});

export const { submit } = skillsSlice.actions;



export default skillsSlice.reducer;
