import { createSlice } from '@reduxjs/toolkit';
import { GAME_INFO_TABS } from '@/constants/gameInfoTabs';

type GameInfoSlice = {
  activeTab: string;
};

const initialState: GameInfoSlice = {
  activeTab: GAME_INFO_TABS.BOX_SCORE,
};

const gameInfoSlice = createSlice({
  name: 'gameInfo',
  initialState,
  reducers: {
    setGameInfoTab: (state, { payload }) => {
      state.activeTab = payload;
    },
  },
});

export const gameInfoActions = gameInfoSlice.actions;
export default gameInfoSlice.reducer;
