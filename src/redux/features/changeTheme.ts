import { createSlice } from "@reduxjs/toolkit";


const lightMode = {
    name:'lightMode',
    background: 'lightModeBackground',
    input:'lightModeInput',
    textColor:'lightTextColor',
    backgroundCard:'lightBackgroundCard',
    backgroundButtonRepositorio:'bg-blue-500 hover:brightness-150 border-blue-700',
    backgroundDeploy:'bg-green-500 hover:brightness-150 disabled:bg-gray-300 disabled:brightness-100 border-green-700 disabled:border-b-0',
    backgroundButtonOverAll:'bg-yellow-500 hover:brightness-150 border-yellow-700',
}

const darkMode = {
    name:'darkMode',
    background: 'darkModeBackground',
    input:'darkModeInput',
    textColor:'darkTextColor',
    backgroundCard:'darkBackgroundCard',
    backgroundButtonRepositorio:'bg-sky-500 hover:brightness-150 border-sky-700',
    backgroundDeploy:'bg-teal-500 hover:brightness-150 disabled:bg-slate-700 disabled:brightness-100 border-teal-700 disabled:border-b-0',
    backgroundButtonOverAll:'bg-amber-500 hover:brightness-150 border-amber-700',
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