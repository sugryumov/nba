import { FC } from 'react';
import { Typography } from 'antd';
import { GAME_STATUS } from '@/constants/gameStatus';

import styles from './index.module.css';

type GameStatusProps = {
  time: string;
  status: number;
};

const GameStatus: FC<GameStatusProps> = ({ time, status }) => (
  <div className={styles.status}>
    {status === GAME_STATUS.notStarted ? (
      <Typography.Title level={5}>{time.toUpperCase()}</Typography.Title>
    ) : (
      time
    )}
  </div>
);

export default GameStatus;
