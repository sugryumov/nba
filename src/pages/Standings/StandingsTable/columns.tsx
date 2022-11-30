import { TEAM_ABBR } from '@/constants/teams';
import SVGIcon from '@/components/SVGIcon';

import styles from './index.module.css';

export const columns = [
  {
    title: 'Team',
    render: (_: string, record: any) => {
      const { playoffRank, teamCity, teamName } = record;

      return (
        <div className={styles.team}>
          <p className={styles.rank}>{playoffRank}</p>
          <SVGIcon name={TEAM_ABBR[teamName]} width={28} height={28} />
          <p className={styles.name}>
            {teamCity} {teamName}
          </p>
        </div>
      );
    },
  },
  {
    title: 'W',
    dataIndex: 'wins',
  },
  {
    title: 'L',
    dataIndex: 'losses',
  },
  {
    title: 'WIN%',
    dataIndex: 'winPct',
    render: (value: number) =>
      value.toLocaleString(undefined, { minimumFractionDigits: 3 }),
  },
  {
    title: 'GB',
    dataIndex: 'conferenceGamesBack',
  },
  {
    title: 'CONF',
    dataIndex: 'conferenceRecord',
  },
  {
    title: 'DIV',
    dataIndex: 'divisionRecord',
  },
  {
    title: 'HOME',
    dataIndex: 'homeRecord',
  },
  {
    title: 'ROAD',
    dataIndex: 'roadRecord',
  },
  {
    title: 'OT',
    dataIndex: 'overTime',
  },
  {
    title: 'LAST10',
    dataIndex: 'last10',
  },
  {
    title: 'STREAK',
    dataIndex: 'strCurrentStreak',
  },
];
