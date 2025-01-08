import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: true,
        user: null, 
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = false;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = true;
            state.user = null;
        }
    }
})

export const loginActions = LoginSlice.actions;

export default LoginSlice;