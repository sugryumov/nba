import { createSlice } from '@reduxjs/toolkit';
import { GROUP_BY } from '@/constants/groupBy';
import { GroupBy } from '@/types/response/standings';

type StandingsSlice = {
  groupBy: GroupBy;
};

const initialState: StandingsSlice = {
  groupBy: GROUP_BY.CONFERENCE,
};

const standingsSlice = createSlice({
  name: 'standings',
  initialState,
  reducers: {
    setGroupBy: (state, { payload }) => {
      state.groupBy = payload;
    },
  },
});

export const standingsActions = standingsSlice.actions;
export default standingsSlice.reducer;
