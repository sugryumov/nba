import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchShotChartQuery } from '@/services/shotChartService';
import { ShotChartResponseDto } from '@/types/response/shotChart';
import GetDataLayout from '@/components/GetDataLayout';
import ShotChartTable from './ShotChartTable';

const ShotChart: FC = () => {
  const { search } = useLocation();

  const gameId = new URLSearchParams(search).get('gameId')!;
  const teamId = new URLSearchParams(search).get('teamId')!;
  const playerId = new URLSearchParams(search).get('playerId')!;
  const type = new URLSearchParams(search).get('type')!;

  const { data, isFetching, isError } = useFetchShotChartQuery({
    gameId,
    teamId,
    playerId,
    type,
  });

  const filteredData = data?.filter(shot =>
    type.includes('M') ? shot.shotMadeFlag : shot,
  ) as ShotChartResponseDto[];

  return (
    <GetDataLayout data={data} isLoading={isFetching} isError={isError}>
      <ShotChartTable data={filteredData} />
    </GetDataLayout>
  );
};

export default ShotChart;
