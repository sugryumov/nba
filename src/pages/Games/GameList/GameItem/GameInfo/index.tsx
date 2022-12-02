import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import './index.css';

type GameInfoProps = {
  gameId: string;
};

const GameInfo: FC<GameInfoProps> = ({ gameId }) => {
  const { gameDate } = useTypedSelector(state => state.gamesReducer);
  const toPath = `${ROUTES.BOX_SCORE.PATH}?date=${gameDate}&id=${gameId}`;

  return (
    <Link to={toPath} className="game-info__link">
      Box Score
    </Link>
  );
};

export default GameInfo;
