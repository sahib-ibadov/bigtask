import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const adminSlice=createSlice({
    name:"admin",
    initialState:{
        data:[]
    },
    reducers:{
        addBooks:(state,action)=>{
            state.data=[...state.action,action.payload]
            localStorage.setItem("adminBooks", JSON.stringify(state.data))
        }

      
    }
})
 export const {deleteadmin}=adminSlice.actions

export default adminSlice.reducer