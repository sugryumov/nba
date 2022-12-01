import { Grid } from 'antd';
import { TEAM_ABBR } from '@/constants/teams';
import SVGIcon from '@/components/SVGIcon';

export const columns = [
  {
    title: 'Team',
    fixed: true,
    render: (_: string, record: any) => {
      const { playoffRank, teamCity, teamName } = record;

      return (
        <div className="standings__team">
          <p className="standings__rank">{playoffRank}</p>
          <SVGIcon name={TEAM_ABBR[teamName]} width={28} height={28} />
          <div className="standings__name">
            <p className="standings__name-mobile">{TEAM_ABBR[teamName]}</p>
            <p className="standings__name-desktop">
              {teamCity} {teamName}
            </p>
          </div>
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
