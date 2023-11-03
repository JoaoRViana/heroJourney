import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroes:{

}
};

export const heroColors = createSlice({
  name: 'heroColors',
  initialState,
  reducers: {
    colors: (state, action) => {
      state.heroes = action.payload;
    }
  }
});

export const { colors } = heroColors.actions;
export default heroColors.reducer;
