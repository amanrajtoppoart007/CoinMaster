import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    token: '',
  },
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    setLogoutState: state => {
      state.isLoggedIn = false;
      state.token = '';
    },
  },
});

export const {setAuth, setLogoutState} = authSlice.actions;

export default authSlice.reducer;
