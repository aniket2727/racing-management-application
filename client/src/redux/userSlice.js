// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load user data from localStorage on application startup
const loadUserFromStorage = () => {
  try {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error('Error loading user from storage:', error);
    return null;
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: loadUserFromStorage() || {
    email: '',
    token: '',
    name: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.name = action.payload.name;

      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(state));
    },
    clearUser: (state) => {
      state.email = '';
      state.token = '';
      state.name = '';

      // Clear from localStorage
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
