import { FC } from 'react';
import { Spin } from 'antd';
import { useFetchGamesQuery } from '@/services/gamesService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Controls from './Controls';

const Games: FC = () => {
  const { gameDate } = useTypedSelector(state => state.gamesReducer);
  const { data, isFetching } = useFetchGamesQuery(gameDate);

  return (
    <div>
      <Controls />

      {isFetching ? (
        <Spin />
      ) : (
        data?.map(game => {
          return (
            <div key={game.gameId}>
              <p>
                {game.visitorTeam} {game.visitorTeamPoints} -{' '}
                {game.homeTeamPoints} {game.homeTeam}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Games;
