import { FC } from 'react';
import { Card } from 'antd';
import { GameResponseDto } from '@/types/response/games';
import Team from './Team';
import GameStatus from './GameStatus';
import GameInfo from './GameInfo';

import styles from './index.module.css';
import { GAME_STATUS } from '@/constants/gameStatus';

type GameItemProps = {
  game: GameResponseDto;
};

const GameItem: FC<GameItemProps> = ({ game }) => (
  <Card
    key={game.gameId}
    className={styles.card}
    bodyStyle={{ padding: '15px 0 0' }}
  >
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

    {game.gameStatusId !== GAME_STATUS.notStarted && (
      <Card className={styles.info} bodyStyle={{ padding: '0' }}>
        <GameInfo gameId={game.gameId} />
      </Card>
    )}
  </Card>
);

export default GameItem;
