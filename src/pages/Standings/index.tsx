import { FC } from 'react';
import { useFetchStandingsQuery } from '@/services/standingsService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CONFERENCE_DIVISION_NAME } from '@/constants/groupBy';
import GetDataLayout from '@/components/GetDataLayout';
import StandingsSettings from './StandingsSetting';
import StandingsTable from './StandingsTable';
import { separateOnDivision } from './prepareData';

const Standings: FC = () => {
  const { groupBy } = useTypedSelector(state => state.standingsReducer);
  const { data, isFetching, isError } = useFetchStandingsQuery({});

  const teams = separateOnDivision(data, groupBy);

  return (
    <>
      <StandingsSettings />

      <GetDataLayout data={data} isLoading={isFetching} isError={isError}>
        {Object.entries(teams).map(([name, teams]) => (
          <StandingsTable
            key={name}
            data={teams}
            title={CONFERENCE_DIVISION_NAME[name]}
          />
        ))}
      </GetDataLayout>
    </>
  );
};

export default Standings;
