import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            const {name,price}=action.payload;
            const keyExists = state.items.some(item => item.name === name);
            if(keyExists){
                let itemToUpdate = state.items.find(item => item.name === name);
                itemToUpdate.qty+=1;
            }
            else{
                let newItem = {name: name,price: price, qty: 1 };
                state.items.push(newItem);
            }
            // state.items.push(action.payload);
        },
        removeItem: (state,action) =>{
            state.items = state.items.filter((item)=>item.name!==action.payload);
        },
        clearCart: (state)=>{
            state.items=[];
        },
        incrementQty: (state,action) =>{
            let itemToUpdate = state.items.find(item => item.name === action.payload);
            itemToUpdate.qty+=1;
        },
        decrementQty: (state,action) =>{
            let itemToUpdate = state.items.find(item => item.name === action.payload);
            itemToUpdate.qty-=1;
            // if(itemToUpdate.qty===0){
            //     remove(action.payload);
            // }
        }
    },
});

export const {addItem,removeItem,clearCart,incrementQty,decrementQty} = cartSlice.actions;

export default cartSlice.reducer;