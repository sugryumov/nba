import { FC } from 'react';
import { TEAMS, TEAM_NAMES } from '@/constants/teams';
import SVGIcon from '@/components/SVGIcon';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import './index.css';

type TeamProps = {
  pts: number;
  team: string;
  record: string;
  isReverse?: boolean;
};

const Team: FC<TeamProps> = ({ pts, team, record, isReverse }) => {
  const { isShowScore } = useTypedSelector(state => state.gamesReducer);

  return (
    <div
      className={
        isReverse
          ? 'game-list__item--team game-list__item--reverse'
          : 'game-list__item--team'
      }
    >
      <div className="game-list__item--info">
        <SVGIcon name={TEAMS[team]} width={54} height={54} />
        <p>{TEAM_NAMES[team]}</p>
        <p>{isShowScore ? record : '-'}</p>
      </div>

      <div className="game-list__item--pts">{isShowScore && pts}</div>
    </div>
  );
};

export default Team;
