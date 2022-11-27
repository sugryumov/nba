import dayjs from 'dayjs';
import { DATE_FORMAT } from '@/constants';

export const parseDateFromYMD = (date?: string) => {
  return dayjs(date, DATE_FORMAT);
};
