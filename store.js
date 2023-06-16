import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./src/redux/services/SignupSlice"




export const store = configureStore({
    reducer: {
        signUpSlice: signUpSlice,

    }
})



export default store;