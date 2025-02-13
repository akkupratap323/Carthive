import { createSlice } from '@reduxjs/toolkit';

const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {
            name: "unknown",
            email: "unknown@gmail.com",
            password: "*********",
            image: "",
            uid: "*************",
            phoneNumber: ""
        }
    },
    reducers: {
        addProfile: (state, action) => {
            state.profile = action.payload;
        },
        removeProfile: (state) => {
            state.profile = {
                name: "",
                email: "",
                password: "",
                image: "",
                uid: "",
                phoneNumber: ""
            };
        }
    }
});

export const profileActions = ProfileSlice.actions;

export default ProfileSlice;
