import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { ROUTES } from '@/constants/routes';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import './index.css';

type GameInfoProps = {
  gameId: string;
  hTeam: string;
  vTeam: string;
};

const GameInfo: FC<GameInfoProps> = ({ gameId, hTeam, vTeam }) => {
  const { gameDate } = useTypedSelector(state => state.gamesReducer);
  const toBoxScorePath = `${ROUTES.BOX_SCORE.PATH}?date=${gameDate}&id=${gameId}`;
  const toPlayByPlayPath = `${ROUTES.PLAY_BY_PLAY.PATH}?id=${gameId}&hTeam=${hTeam}&vTeam=${vTeam}`;

  return (
    <>
      <Link to={toBoxScorePath} className="game-info__link">
        Box Score
      </Link>
      <Divider type="vertical" className="game-info__divider" />
      <Link to={toPlayByPlayPath} className="game-info__link">
        Play By Play
      </Link>
    </>
  );
};

export default GameInfo;
