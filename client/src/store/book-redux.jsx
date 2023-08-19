import { createSlice } from "@reduxjs/toolkit";
const bookSlice = createSlice({
    name:"bookmark",
    initialState:{
        bookmarks:[],
        // added:false,
    },
    reducers:{
        addBookmark(state,action){
            const newItem = action.payload;
            console.log(newItem);
            state.bookmarks.push(newItem)
            // console.log(state.bookmarks);
        },
        removeBookmark(state,action){
            const newItem = action.payload;
            state.bookmarks = state.bookmarks.filter(data => data.title !== newItem.title)
        }
    }
})
export const bookActions = bookSlice.actions;
export default bookSlice.reducer;