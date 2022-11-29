import { FC } from 'react';
import { TEAMS, TEAM_NAMES } from '@/constants/teams';
import SVGIcon from '@/components/SVGIcon';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import styles from './index.module.css';

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
      className={isReverse ? `${styles.team} ${styles.reverse}` : styles.team}
    >
      <div className={styles.info}>
        <SVGIcon name={TEAMS[team]} width={54} height={54} />
        <p>{TEAM_NAMES[team]}</p>
        <p>{isShowScore ? record : '-'}</p>
      </div>

      <div className={styles.pts}>{isShowScore && pts}</div>
    </div>
  );
};

export default Team;
