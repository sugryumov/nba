import { createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    setScoreboard: (_, { payload }) => payload,
  },
});

export const scoreboardActions = scoreboardSlice.actions;
export default scoreboardSlice.reducer;
