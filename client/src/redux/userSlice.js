// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    token: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.email = '';
      state.token = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
