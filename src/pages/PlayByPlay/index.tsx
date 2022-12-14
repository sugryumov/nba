import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'antd';
import { useFetchPlayByPlayQuery } from '@/services/playByPlayService';
import GetDataLayout from '@/components/GetDataLayout';
import PlayByPlayHeader from './PlayByPlayHeader';
import PlayByPlayList from './PlayByPlayList';

import './index.css';

const PlayByPlay: FC = () => {
  const { search } = useLocation();
  const gameId = new URLSearchParams(search).get('id')!;
  const { data, isFetching, isError } = useFetchPlayByPlayQuery(gameId);

  return (
    <GetDataLayout data={data} isLoading={isFetching} isError={isError}>
      <Card className="play-by-play">
        <PlayByPlayHeader />
        <PlayByPlayList list={data || []} />
      </Card>
    </GetDataLayout>
  );
};

export default PlayByPlay;
