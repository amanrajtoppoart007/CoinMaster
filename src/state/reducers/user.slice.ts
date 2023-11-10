import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    name: 'Guest User',
    username: '',
    password: '',
  },
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
