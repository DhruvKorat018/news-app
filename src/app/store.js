import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../app/slices/searchFeature/searchSlice'

export const store = configureStore({
    reducer: searchReducer,
})