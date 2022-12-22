import { createSlice } from '@reduxjs/toolkit';

type ShotChartSlice = {
  video: {
    gameId: null | string;
    gameEventId: null | number;
  };
};

const initialState: ShotChartSlice = {
  video: {
    gameId: null,
    gameEventId: null,
  },
};

const shotChartSlice = createSlice({
  name: 'shotChart',
  initialState,
  reducers: {
    setShotChartVideo: (state, { payload }) => {
      state.video = payload;
    },
  },
});

export const shotChartActions = shotChartSlice.actions;
export default shotChartSlice.reducer;
