import { createSlice } from '@reduxjs/toolkit';


const ProfileSlice = createSlice({
  
    name: 'profile',
    initialState: {
        profile: {
            name: "unknown",
            email: "unknown@gmail.com",
            password: "",
        }
    },reducers: {
        addProfile: (state, action) => {
            state.profile = action.payload;
        },
        removeProfile: (state) => {
            state.profile = {
                name: "",
                email: "",
                password: "",
            }
        }
    }
    
})

export const profileActions = ProfileSlice.actions;
    
 export default ProfileSlice;