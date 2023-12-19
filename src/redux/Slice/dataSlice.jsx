import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("getData", async () => {
    const res = await axios.get("http://localhost:3000/Books")
    return res.data
})


export const deleteData = createAsyncThunk("deleteData", async (item) => {
    const res = await axios.delete(`http://localhost:3000/Books/${item.id}`)
    return item
})


export const AddData = createAsyncThunk("AddData", async (item) => {
    const response = await axios.post(`http://localhost:3000/Books`, item)
    return response
})


const dataSlice = createSlice({
    name: "Books",
    initialState: {
        data: [],
        obj: {},
        loading: false,
        error: ""

    },
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state, action) => {
            state.loading = true
            state.error = ""

        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
            state.data = action.payload
            console.log(state.data)
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.error = action.payload.message,
                state.loading = false
        })




        builder.addCase(deleteData.pending, (state, action) => {
            state.loading = true
            state.error = ""

        })
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
            state.data = [...state.data.filter(item => item.id != action.payload.id)]
            console.log(state.data)
        })
        builder.addCase(deleteData.rejected, (state, action) => {
            state.error = action.payload.message,
                state.loading = false
        })


        builder.addCase(AddData.pending, (state, action) => {
            state.loading = true,
                state.error = ""
        })
        builder.addCase(AddData.fulfilled, (state, action) => {
            state.loading = false,
                state.error = "",
                console.log(action.payload)
                
        })
        builder.addCase(AddData.rejected, (state, action) => {
            state.loading = false
        })

    }
})
export default dataSlice.reducer














      // builder.addCase(updateData.pending, (state, action) => {
        //     state.loading = true
        //     state.error = ""

        // })
        // builder.addCase(updateData.fulfilled, (state, action) => {
        //     state.loading = false
        //     state.error = ""
        //     state.data = [...state.data.filter(item => item.id != action.payload.id), action.payload]
        // })
        // builder.addCase(updateData.rejected, (state, action) => {
        //     state.error = action.payload.message,
        //         state.loading = false
        // })




// export const updateData = createAsyncThunk("getData", async ({ id, newData }) => {
//     const res = await axios.put(`http://localhost:3000/Books/${id}`, newData)
//     return res.data
// })
