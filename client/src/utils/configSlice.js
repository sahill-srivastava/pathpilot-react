import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        defaultTheme: "dark"
    },
    reducers: {
        setTheme: (state, action) => {
            state.defaultTheme = action.payload;
        }
    }
})

export const { setTheme } = configSlice.actions;

export default configSlice.reducer;