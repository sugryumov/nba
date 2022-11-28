import { FC } from 'react';
import { Card } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { GameResponseDto } from '@/types/response/games';
import { TEAMS } from '@/constants/teams';
import SVGIcon from '@/components/SVGIcon';

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
            <SVGIcon name={TEAMS[game.visitorTeam]} width={54} height={54} />
            {game.visitorTeam} {isShowScore ? game.visitorTeamPoints : '-'} -{' '}
            {isShowScore ? game.homeTeamPoints : '-'} {game.homeTeam}
            <SVGIcon name={TEAMS[game.homeTeam]} width={54} height={54} />
            <p>{game.gameStatusText}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default GameList;
