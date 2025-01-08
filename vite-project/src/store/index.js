import {configureStore} from '@reduxjs/toolkit'
import itemSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import LoginSlice from "./LoginSlice";
import ProfileSlice from './profileSlice';



const Store =  configureStore({
  reducer:{
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
    LoginStatus:LoginSlice.reducer,
    ProfileStatus:ProfileSlice.reducer,
  }
})

export default Store;