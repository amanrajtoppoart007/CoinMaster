import {createSlice} from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    isDbConfigured: false,
  },
  reducers: {
    setIsDbConfigured: (state, action) => {
      state.isDbConfigured = action.payload;
    },
  },
});

export const {setIsDbConfigured} = configSlice.actions;

export default configSlice.reducer;
