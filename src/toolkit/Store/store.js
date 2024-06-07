import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../Slice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer
    }
})
export default store;


