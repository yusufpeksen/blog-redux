import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
]


const postSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {
        pushPost : (state , action) => {
            state.push(action.payload)
        }
    }
})


export const selectAllPosts = (state) => state.posts;
export const {pushPost} = postSlice.actions;
export default postSlice.reducer;