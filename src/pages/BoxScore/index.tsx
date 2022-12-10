import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchBoxScoreQuery } from '@/services/boxScoreService';
import { BoxScoreResponseDto } from '@/types/response/boxScore';
import GetDataLayout from '@/components/GetDataLayout';
import BoxScoreTable from './BoxScoreTable';

const BoxScore: FC = () => {
  const { search } = useLocation();
  const gameId = new URLSearchParams(search).get('id')!;
  const { data = {}, isFetching, isError } = useFetchBoxScoreQuery(gameId);

  return (
    <GetDataLayout
      data={Object.keys(data)}
      isLoading={isFetching}
      isError={isError}
    >
      {Object.values(data as BoxScoreResponseDto).map(team => (
        <BoxScoreTable key={team.teamId} data={team} />
      ))}
    </GetDataLayout>
  );
};

export default BoxScore;