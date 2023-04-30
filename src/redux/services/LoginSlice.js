import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const login = createAsyncThunk("login", async (userData) => {
    console.log(userData)
    axios.post("http://192.168.2.132:3001/api/auth/login", userData)
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
            password: "",
        },
        isLoader: false,
        isError: false
    },


    reducers: {
        updateEmailAndPassword: (state, action) => {
            state.data.email = action.payload.email;
            state.data.password = action.payload.password;
        },
    },

    extraReducers: builder => {

        builder.addCase(login.pending, (state, action) => {
            state.isLoader = true;
        })


        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoader = false;
        })


        builder.addCase(login.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })
    }
})

export const {updateEmailAndPassword} = loginSlice.actions;
export default loginSlice.reducer;