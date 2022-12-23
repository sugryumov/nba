import { FC, useEffect } from 'react';
import { Spin } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useLazyFetchVideoEventQuery } from '@/services/videoEventService';

import './index.css';

const ShotChartVideo: FC = () => {
  const [fetchVideo, { data, isFetching }] = useLazyFetchVideoEventQuery();
  const { video, info } = useTypedSelector(state => state.shotChartReducer);

  useEffect(() => {
    if (video.gameEventId) {
      fetchVideo({
        ...video,
      });
    }
  }, [video]);

  const renderTitle = `${info?.playerName} ${info?.minutesRemaining}' ${info?.actionType}`;

  return (
    <>
      {isFetching ? (
        <Spin size="large" className="shot-chart__video--spin" />
      ) : (
        <div className="shot-chart__video">
          <p className="shot-chart__video--title">{renderTitle}</p>
          <video
            autoPlay
            controls
            src={data?.videoUrl}
            poster={data?.videoPoster}
            className="shot-chart__video--video"
          />
        </div>
      )}
    </>
  );
};

export default ShotChartVideo;
