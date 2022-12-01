import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, BASE_URL_DEV } from '@/constants/environments';

const isDevelop = () => {
  const hostname = window.location.hostname;

  return hostname.includes('github');
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: isDevelop() ? BASE_URL_DEV : BASE_URL,
  }),
  endpoints: () => ({}),
});
