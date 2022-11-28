import { FC } from 'react';
import { Spin } from 'antd';
import { useFetchGamesQuery } from '@/services/gamesService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Controls from './Controls';
import GameList from './GameList';

const Games: FC = () => {
  const { gameDate } = useTypedSelector(state => state.gamesReducer);
  const { data, isFetching } = useFetchGamesQuery(gameDate);

  return (
    <>
      <Controls />

      {isFetching ? <Spin /> : <GameList games={data!} />}
    </>
  );
};

export default Games;
