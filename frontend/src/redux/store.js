import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import  changeMode  from "./modeSlice";


const store = configureStore({
    reducer:{
        auth:authSlice,
        job:jobSlice ,
        mode:changeMode,
    }
})

export default store;