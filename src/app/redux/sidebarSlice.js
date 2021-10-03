import {  createSlice } from "@reduxjs/toolkit";



export const sidebarSlice = createSlice({
  name: "navigation",
  initialState: {
      name: "Personal"
    
  },
  reducers: {
    add: (state, action) => {
        state.name = action.payload;
    },
    reset: (state, action) => {}
  },
});

export const { add,reset } = sidebarSlice.actions;



export default sidebarSlice.reducer;
