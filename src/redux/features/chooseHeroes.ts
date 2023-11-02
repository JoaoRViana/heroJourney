import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstHero: {},
  secondHero: {},
}

export const chooseHeroes = createSlice({
  name: 'chooseHeroes',
  initialState,
  reducers: {
    change: (state, action) => {
      const newState = { ...state, ...action.payload };
      return newState;
    }
  }
})

export const { change } = chooseHeroes.actions;
export default chooseHeroes.reducer;
