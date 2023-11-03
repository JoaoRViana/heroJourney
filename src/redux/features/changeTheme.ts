import { createSlice } from "@reduxjs/toolkit";


const lightMode = {
    name:'lightMode',
    background: 'lightModeBackground',
    input:'lightModeInput',
    textColor:'lightTextColor',
    backgroundCard:'lightBackgroundCard',
}

const darkMode = {
    name:'darkMode',
    background: 'darkModeBackground',
    input:'darkModeInput',
    textColor:'darkTextColor',
    backgroundCard:'darkBackgroundCard',
}


const initialState={
  value: lightMode,
};

export const changeTheme = createSlice({
    name:'changeTheme',
    initialState,
    reducers:{
        change: (state) => {
            state.value = state.value.name === 'lightMode' ? darkMode : lightMode;
          },
    }
})

export const {change} = changeTheme.actions
export default changeTheme.reducer;