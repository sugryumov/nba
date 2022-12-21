import dayjs from 'dayjs';
import { DATE_FORMAT } from '@/constants';

export const parseDateFromYMD = (date?: string) => dayjs(date, DATE_FORMAT);

export const prepareTime = (value: number) => (value > 9 ? value : `0${value}`);
