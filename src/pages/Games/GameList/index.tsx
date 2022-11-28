import { FC } from 'react';
import { Card } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { GameResponseDto } from '@/types/response/games';

import styles from './index.module.css';

type GameListProps = {
  games: GameResponseDto[];
};

const GameList: FC<GameListProps> = ({ games }) => {
  const { isShowScore } = useTypedSelector(state => state.gamesReducer);

  return (
    <div className={styles.list}>
      {games?.map(game => {
        return (
          <Card key={game.gameId} className={styles.game}>
            {game.visitorTeam} {isShowScore ? game.visitorTeamPoints : '-'} -{' '}
            {isShowScore ? game.homeTeamPoints : '-'} {game.homeTeam}
            <p>{game.gameStatusText}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default GameList;
