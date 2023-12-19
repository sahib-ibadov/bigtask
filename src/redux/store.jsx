import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import dataSlice from "./Slice/dataSlice";
import basketSlice from "./Slice/basketSlice";
import wishlistSlice from "./Slice/wishlistSlice";
import adminSlice from "./Slice/adminSlice";





const store = configureStore({
    reducer: {
        Books: dataSlice,
        basket:basketSlice,
       wishlist:wishlistSlice,
       admin: adminSlice
       
    }
})
export default store