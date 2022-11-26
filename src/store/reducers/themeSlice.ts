import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageThemeKey } from '@/helpers/localStorage';
import { ThemeAlgorithm } from '@/types/theme';
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_LOCAL_STORAGE_KEY,
} from '@/constants/theme';

type ThemeSlice = {
  themeAlgorithm: ThemeAlgorithm;
};

const initialState: ThemeSlice = {
  themeAlgorithm: getLocalStorageThemeKey(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeAlgorithm: state => {
      const theme = getLocalStorageThemeKey();
      const result = theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

      localStorage.setItem(THEME_LOCAL_STORAGE_KEY, result);
      state.themeAlgorithm = result;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
