import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { ROUTES } from '@/constants/routes';
import { GAME_INFO_TABS } from '@/constants/gameInfoTabs';
import { useActions } from '@/hooks/useActions';

import './index.css';

type GameInfoProps = {
  gameId: string;
  hTeam: string;
  vTeam: string;
};

const GameInfo: FC<GameInfoProps> = ({ gameId, hTeam, vTeam }) => {
  const { setGameInfoTab } = useActions();

  const onClickHandler = (key: string) => () => {
    setGameInfoTab(key);
  };

  const path = `${ROUTES.GAME_INFO.PATH}?&gameId=${gameId}&hTeam=${hTeam}&vTeam=${vTeam}`;

  return (
    <>
      <Link
        to={path}
        className="game-info__link"
        onClick={onClickHandler(GAME_INFO_TABS.BOX_SCORE)}
      >
        Box Score
      </Link>
      <Divider type="vertical" className="game-info__divider" />
      <Link
        to={path}
        className="game-info__link"
        onClick={onClickHandler(GAME_INFO_TABS.PLAY_BY_PLAY)}
      >
        Play By Play
      </Link>
    </>
  );
};

export default GameInfo;
