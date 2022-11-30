import { FC } from 'react';
import { useFetchStandingsQuery } from '@/services/standingsService';
import GetDataLayout from '@/components/GetDataLayout';
import { separateOnDivision } from './prepareData';
import StandingsTable from './StandingsTable';

const Standings: FC = () => {
  const { data, isFetching, isError } = useFetchStandingsQuery({});

  const { east, west } = separateOnDivision(data);

  return (
    <GetDataLayout data={data} isLoading={isFetching} isError={isError}>
      <StandingsTable data={east} title="Eastern Conference" />
      <StandingsTable data={west} title="Western Conference" />
    </GetDataLayout>
  );
};

export default Standings;
