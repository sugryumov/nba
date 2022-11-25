import { FC } from 'react';
import { useFetchScoreboardQuery } from '@/services/scoreboardService';

export const Scoreboard: FC = () => {
  const { data } = useFetchScoreboardQuery('2022-11-22');

  console.log('data', data);

  return <div>Scoreboard</div>;
};

export default Scoreboard;
