import { createSlice } from "@reduxjs/toolkit";


const resultSlice = createSlice({
    name: "quizResult",
    initialState: {
        result: []
    },
    reducers: {
        addResult: (state, action) => {
            state.result = action.payload;
        }
    }
})


export const { addResult } = resultSlice.actions

export default resultSlice.reducer