import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        items: localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : []

    },
    reducers: {
        Addtobasket: (state, action) => {
            const target = state.items.find(item => item.product.id === action.payload.id)
            if (target) {
                target.count = target.count + 1
                target.totalPrice = target.count * Math.ceil(target.product.price)
                state.items = [...state.items]
                localStorage.setItem("basketItems", JSON.stringify([...state.items]))
            }
            else {
                const basketItem = {
                    id: Date.now(),
                    product: action.payload,
                    count: 1,
                    totalPrice: action.payload.price
                }
                state.items = [...state.items, basketItem]
                localStorage.setItem("basketItems", JSON.stringify([...state.items]))
            }
            console.log(state.items)
        },
        deleteItemFromBasket: (state, action) => {
            const target = state.items.find(item => item.id === action.payload.id)
            const index = state.items.indexOf(target)
            state.items.splice(index, 1)
            localStorage.setItem("basketItems", JSON.stringify([...state.items]))
        },
        decreaseItemFromBasket: (state, action) => {
            const target = state.items.find(item => item.id === action.payload.id)
            if (target.count > 1) {
                target.count = target.count - 1
                target.totalPrice = target.count * Math.ceil(target.product.price)
                state.items = [...state.items]
                localStorage.setItem("basketItems", JSON.stringify([...state.items]))
            }else{
                const index=state.items.indexOf(target)
                state.items.splice(index,1)
                localStorage.setItem("basketItems",JSON.stringify([...state.items]))
            }
        }

    }
})
export const { Addtobasket, decreaseItemFromBasket, deleteItemFromBasket } = basketSlice.actions
export default basketSlice.reducer