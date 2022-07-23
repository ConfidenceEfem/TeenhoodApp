import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTeen: null,
};

const actions = createSlice({
  name: 'teenhood',
  initialState,
  reducers: {
    user: (state, { payload }) => {
      state.currentTeen = payload;
    },
  },
});

export const { user } = actions.actions;
export default actions.reducer;
