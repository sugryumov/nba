import { FC } from 'react';
import { useFetchGamesQuery } from '@/services/gamesService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import GetDataLayout from '@/components/GetDataLayout';
import GameSettings from './GameSettings';
import GameList from './GameList';

const Games: FC = () => {
  const { gameDate } = useTypedSelector(state => state.gamesReducer);
  const { data, isFetching, isError } = useFetchGamesQuery(gameDate);

  return (
    <>
      <GameSettings />

      <GetDataLayout
        data={data}
        isLoading={isFetching}
        isError={isError}
        emptyText="No games scheduled"
      >
        <GameList games={data!} />
      </GetDataLayout>
    </>
  );
};

export default Games;
