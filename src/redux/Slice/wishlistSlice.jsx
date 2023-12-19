import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : []
    },
    reducers: {
        addWishlist: (state, action) => {
            let item = state.items.find((item) => item.id == action.payload.id);
            if (!item) {
                state.items = [...state.items, action.payload]
                localStorage.setItem('wishlistItems', JSON.stringify([...state.items, action.payload]));


            } else {
                alert("item wishlistde var")
            }
        },
        deleteWishlist: (state, action) => {
            const target = state.items.find(item => item.id === action.payload.id)
            const index = state.items.indexOf(target)
            state.items.splice(index, 1)
        }
    }

})
export const { addWishlist,deleteWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer