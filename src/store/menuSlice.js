import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
  
  name: 'menu',
  initialState: {value: false},
  reducers: {
    menuOffAction(state, action) {state.value = false},
    menuToggleAction(state, action) {
      state.value = !state.value
      }
  }
})
export const {menuOffAction, menuToggleAction} = menuSlice.actions;

export default menuSlice.reducer;
