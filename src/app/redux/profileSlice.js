import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
   description: ""
}

export const profileSlice = createSlice({
  name: "profile",
initialState,
  reducers: {
    submit: (state, action) => {
        state.description = action.payload.description;
    },
  },
});

export const { submit } = profileSlice.actions;



export default profileSlice.reducer;
