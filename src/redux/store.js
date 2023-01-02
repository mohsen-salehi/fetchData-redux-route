import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer:{
    users : userSlice.reducer
  },
  devTools : true
})


export default store;
