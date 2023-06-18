import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const loginAccount = createAsyncThunk("login", async (userData) => {
    axios.post("http://192.168.100.53:3001/api/auth/login", userData)
        .then(res => {
            console.log(res.data);
            return res;
        })
        .catch(error => console.log(error));
});





const loginSlice = createSlice({

    name: "login",
    initialState: {
        data: {
            email: "",
            password: ""
        },
        isLoader: false,
        isError: false
    },


    reducers: {

        verifyEmailAndPassword: (state, action) => {

            state.data.email = action.payload.email;
            state.data.password = action.payload.password;

        }
    },



    extraReducers: builder => {


        builder.addCase(loginAccount.pending, (state, action) => {
            state.isLoader = true;
        })


        builder.addCase(loginAccount.fulfilled, (state, action) => {
            state.isLoader = false;
        })


        builder.addCase(loginAccount.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })
    }
})



export const { verifyEmailAndPassword } = loginSlice.actions;
export default loginSlice.reducer;