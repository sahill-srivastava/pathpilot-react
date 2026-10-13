import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice"
import resultReducer from "./quizResultSlice";

const appStore = configureStore({
    reducer: {
        config: configReducer,
        quizResult: resultReducer,
    }
});

export default appStore;