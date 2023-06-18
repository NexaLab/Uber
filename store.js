import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./src/redux/services/SignupSlice"
import loginSlice from "./src/redux/services/LoginSlice"




export const store = configureStore({
    reducer: {
        signUpSlice: signUpSlice,
        loginSlice: loginSlice

    }
})



export default store;