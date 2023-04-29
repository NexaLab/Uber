import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./src/redux/services/LoginSlice"




export const store = configureStore({
    reducer: {
        loginSlice: loginSlice,

    }
})



export default store;