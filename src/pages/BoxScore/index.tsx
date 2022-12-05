import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchBoxScoreQuery } from '@/services/boxScoreService';

const BoxScore: FC = () => {
  const { search } = useLocation();

  const gameId = new URLSearchParams(search).get('id')!;

  const { data } = useFetchBoxScoreQuery(gameId);

  console.log('data', data);
  return <div>BoxScore</div>;
};

export default BoxScore;
