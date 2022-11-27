import { FC } from 'react';
import { useFetchGamesQuery } from '@/services/gamesService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Controls from './Controls';

const Games: FC = () => {
  const { gameDate } = useTypedSelector(state => state.gamesReducer);
  const { data } = useFetchGamesQuery(gameDate);

  console.log('data', data);

  return (
    <div>
      <Controls />
    </div>
  );
};

export default Games;
