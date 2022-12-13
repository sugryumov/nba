import {
  VideoEventResponse,
  VideoEventResponseDto,
} from '@/types/response/videoEvent';
import { api } from './apiService';

const transformData = (data: VideoEventResponse): VideoEventResponseDto => {
  const [video] = data.Meta.videoUrls;

  return {
    videoUrl: video.murl,
    videoPoster: video.mth,
  };
};

export const videoEventApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchVideoEvent: builder.query({
      query: ({ gameId, gameEventId }) => ({
        url: `/video`,
        params: {
          gameId,
          gameEventId,
        },
      }),
      transformResponse: (data: VideoEventResponse): VideoEventResponseDto =>
        transformData(data),
    }),
  }),
});

export const { useLazyFetchVideoEventQuery } = videoEventApi;
