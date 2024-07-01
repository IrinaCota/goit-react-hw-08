import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: initialState.filters,
  reducers: {
    filterContact(state, action) {
      state.name = action.payload;
    },
  },
});

export const { filterContact } = slice.actions;

export default slice.reducer;

export const selectNameFilter = state => state.filters.name;