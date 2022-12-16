import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchShotChartQuery } from '@/services/shotChartService';

const ShotChart: FC = () => {
  const { search } = useLocation();

  const gameId = new URLSearchParams(search).get('gameId')!;
  const teamId = new URLSearchParams(search).get('teamId')!;
  const playerId = new URLSearchParams(search).get('playerId')!;
  const type = new URLSearchParams(search).get('type')!;

  const { data } = useFetchShotChartQuery({ gameId, teamId, playerId, type });

  console.log('data', data);

  return <div>ShotChart</div>;
};

export default ShotChart;
