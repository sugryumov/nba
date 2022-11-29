import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '@/constants';

type GamesSlice = {
  gameDate: string;
  isShowScore: boolean;
};

const initialState: GamesSlice = {
  gameDate: dayjs().format(DATE_FORMAT),
  isShowScore: false,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGameDate: (state, { payload }) => {
      state.gameDate = payload;
    },

    setShowScore: (state, { payload }) => {
      state.isShowScore = payload;
    },
  },
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice.reducer;
