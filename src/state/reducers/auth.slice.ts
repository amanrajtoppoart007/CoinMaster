import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setAuth: state => {
      state.isLoggedIn = true;
    },
    setLogoutState: state => {
      state.isLoggedIn = false;
    },
  },
});

export const {setAuth, setLogoutState} = authSlice.actions;

export default authSlice.reducer;
