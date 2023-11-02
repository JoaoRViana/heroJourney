import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroes: []
}

export const chooseHeroes = createSlice({
  name: 'chooseHeroes',
  initialState,
  reducers: {
    chooseHero: (state, action) => {
      state.heroes = action.payload;
    }
  }
})

export const { chooseHero } = chooseHeroes.actions;
export default chooseHeroes.reducer;
