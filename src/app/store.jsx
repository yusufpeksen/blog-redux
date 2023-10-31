import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/blog/postSlice";

export const store = configureStore({
    reducer : {
        posts : postSlice
    }
})