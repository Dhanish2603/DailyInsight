import { configureStore } from "@reduxjs/toolkit";

import bookSlice from "./book-redux"
const store = configureStore({
    reducer:{book:bookSlice }
})

export default store;