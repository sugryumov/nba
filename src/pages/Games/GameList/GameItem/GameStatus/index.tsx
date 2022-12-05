import { FC } from 'react';
import { GAME_STATUS } from '@/constants/gameStatus';

import './index.css';

type GameStatusProps = {
  time: string;
  status: number;
};

const GameStatus: FC<GameStatusProps> = ({ time, status }) => (
  <div>
    {status === GAME_STATUS.notStarted ? (
      <p className="game-list__item--time">{time.toUpperCase()}</p>
    ) : (
      time
    )}
  </div>
);

export default GameStatus;
