import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name:'favourites',
    initialState:{
        items:[],
    },
    reducers:{
        addFavourite: (state,action)=>{
            const {id,name,price}=action.payload;            
            let newItem = {id:id,name: name,price: price};
            state.items.push(newItem);

            // state.items.push(action.payload);
        },
        removeFavourite: (state,action) =>{
            state.items = state.items.filter((item)=>item.id!==action.payload);
        },
        clearFavourites: (state)=>{
            state.items=[];
        },
    },
});

export const {addFavourite,removeFavourite,clearFavourites} = favouritesSlice.actions;
export default favouritesSlice.reducer;