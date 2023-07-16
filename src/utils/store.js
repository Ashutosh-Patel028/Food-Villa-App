import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favouritesSlice from "./favouritesSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        favourites:favouritesSlice
    },
});

export default store;