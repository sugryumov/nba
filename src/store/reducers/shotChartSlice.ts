import { createSlice } from '@reduxjs/toolkit';

type ShotChartSlice = {
  video: {
    gameId: null | string;
    gameEventId: null | number;
  };
  info: {
    playerName: string;
    minutesRemaining: number;
    actionType: string;
    locX: number;
    locY: number;
  };
};

const initialState: ShotChartSlice = {
  video: {
    gameId: null,
    gameEventId: null,
  },
  info: {
    playerName: '',
    minutesRemaining: 0,
    actionType: '',
    locX: 0,
    locY: 0,
  },
};

const shotChartSlice = createSlice({
  name: 'shotChart',
  initialState,
  reducers: {
    setShotChartVideo: (_, { payload }) => payload,
  },
});

export const shotChartActions = shotChartSlice.actions;
export default shotChartSlice.reducer;
