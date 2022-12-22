import { FC, useEffect } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useLazyFetchVideoEventQuery } from '@/services/videoEventService';

import './index.css';
import { Spin } from 'antd';

const ShotChartVideo: FC = () => {
  const [fetchVideo, { data, isFetching }] = useLazyFetchVideoEventQuery();
  const { video } = useTypedSelector(state => state.shotChartReducer);

  useEffect(() => {
    if (video.gameEventId) {
      fetchVideo({
        ...video,
      });
    }
  }, [video]);

  return (
    <>
      {isFetching ? (
        <Spin size="large" className="shot-chart__video--spin" />
      ) : (
        <video
          autoPlay
          controls
          src={data?.videoUrl}
          poster={data?.videoPoster}
          className="shot-chart__video"
        />
      )}
    </>
  );
};

export default ShotChartVideo;
