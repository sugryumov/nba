import { THEME_LOCAL_STORAGE_KEY } from '@/constants/theme';
import { ThemeAlgorithm } from '@/types/theme';

export const getLocalStorageThemeKey = (): ThemeAlgorithm => {
  return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) !== null
    ? (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ThemeAlgorithm)
    : 'defaultAlgorithm';
};
