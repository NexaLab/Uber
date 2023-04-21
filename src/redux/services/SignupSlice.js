import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const createAccount = createAsyncThunk("signup", async (userData) => {
    axios.post("http://192.168.1.219:3001/api/auth/signup", userData)
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(error => console.log(error));
});





const signUpSlice = createSlice({

    name: "signup",
    initialState: {
        data: {
            email: "",
            password: "",
            phoneNo: "",
            country: "",
            city: ""
        },
        isLoader: false,
        isError: false
    },


    reducers: {


        updateEmailAndPassword: (state, action) => {
            state.data.email = action.payload.email;
            state.data.password = action.payload.password;
        },


        updatePhoneNoAndCountryAndCity: (state, action) => {
            state.data.phoneNo = action.payload.phoneNo;
            state.data.country = action.payload.country;
            state.data.city = action.payload.city;
        },
    },



    extraReducers: builder => {


        builder.addCase(createAccount.pending, (state, action) => {
            state.isLoader = true;
        })


        builder.addCase(createAccount.fulfilled, (state, action) => {
            state.isLoader = false;
        })


        builder.addCase(createAccount.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })
    }
})



export const { updateEmailAndPassword, updatePhoneNoAndCountryAndCity } = signUpSlice.actions;
export default signUpSlice.reducer;