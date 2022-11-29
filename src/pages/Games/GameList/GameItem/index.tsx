import { FC } from 'react';
import { Card } from 'antd';
import { GameResponseDto } from '@/types/response/games';
import Team from './Team';
import GameStatus from './GameStatus';

import styles from './index.module.css';

type GameItemProps = {
  game: GameResponseDto;
};

const GameItem: FC<GameItemProps> = ({ game }) => (
  <Card key={game.gameId} bodyStyle={{ padding: '18px' }}>
    <div className={styles.game}>
      <Team
        pts={game.visitorTeamPoints}
        team={game.visitorTeam}
        record={game.visitorTeamRecord}
      />

      <GameStatus time={game.gameStatusText} status={game.gameStatusId} />

      <Team
        pts={game.homeTeamPoints}
        team={game.homeTeam}
        record={game.homeTeamRecord}
        isReverse={true}
      />
    </div>
  </Card>
);

export default GameItem;
