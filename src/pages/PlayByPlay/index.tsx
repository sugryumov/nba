import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'antd';
import { useFetchPlayByPlayQuery } from '@/services/playByPlayService';
import GetDataLayout from '@/components/GetDataLayout';
import PlayByPlayHeader from './PlayByPlayHeader';
import PlayByPlayItem from './PlayByPlayItem';

import './index.css';

const PlayByPlay: FC = () => {
  const { search } = useLocation();
  const gameId = new URLSearchParams(search).get('id')!;
  const { data, isFetching, isError } = useFetchPlayByPlayQuery(gameId);

  return (
    <GetDataLayout data={data} isLoading={isFetching} isError={isError}>
      <Card className="play-by-play">
        <PlayByPlayHeader />
        {data?.map(item => (
          <PlayByPlayItem key={item.eventNum} item={item} />
        ))}
      </Card>
    </GetDataLayout>
  );
};

export default PlayByPlay;
