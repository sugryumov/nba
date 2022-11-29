import { FC } from 'react';
import { GameResponseDto } from '@/types/response/games';
import GameItem from './GameItem';

import styles from './index.module.css';

type GameListProps = {
  games: GameResponseDto[];
};

const GameList: FC<GameListProps> = ({ games }) => (
  <div className={styles.list}>
    {games?.map(game => (
      <GameItem key={game.gameId} game={game} />
    ))}
  </div>
);

export default GameList;
