import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    clearAuthHeader();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.status);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      setAuthHeader(savedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);