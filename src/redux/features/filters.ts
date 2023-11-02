import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  alignment: '',
}

export const changeFilter = createSlice({
  name: 'changeFilter',
  initialState,
  reducers: {
    change: (state, action) => {
      const newState = { ...state, ...action.payload };
      return newState;
    }
  }
})

export const { change } = changeFilter.actions;
export default changeFilter.reducer;
