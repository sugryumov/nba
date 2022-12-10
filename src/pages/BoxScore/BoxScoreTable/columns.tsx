import { BoxScorePlayer } from '@/types/response/boxScore';
import type { ColumnsType } from 'antd/es/table';

const sharedOnCell = (data: BoxScorePlayer) =>
  Number(data.played) ? {} : { colSpan: 0 };

export const columns: ColumnsType<BoxScorePlayer> = [
  {
    title: 'Player',
    fixed: true,
    render: (_: string, record: BoxScorePlayer) => {
      const { name, position, personId } = record;

      return (
        <div className="box-score__table--player">
          <img
            className="box-score__table--img"
            src={`https://cdn.nba.com/headshots/nba/latest/260x190/${personId}.png`}
          />
          {name}
          <span className="box-score__table--position">{position ?? ''}</span>
        </div>
      );
    },
  },
  {
    title: 'MIN',
    dataIndex: ['statistics', 'minutes'],
    render: (value: string, record: BoxScorePlayer) => {
      const [min, sec] = value.split('M');
      const { played, notPlayingReason } = record;

      if (!Number(played)) {
        return (
          <p className="box-score__table--not-playing">
            {notPlayingReason
              ? notPlayingReason.split('_').join(' - ')
              : "DNP - Coach's Decision"}
          </p>
        );
      }

      return `${min.match(/\d+/)}:${sec.match(/\d+/)}`;
    },
    onCell: ({ played }) => (Number(played) ? {} : { colSpan: 20 }),
  },
  {
    title: 'FGM',
    dataIndex: ['statistics', 'fieldGoalsMade'],
    onCell: sharedOnCell,
  },
  {
    title: 'FGA',
    dataIndex: ['statistics', 'fieldGoalsAttempted'],
    onCell: sharedOnCell,
  },
  {
    title: 'FG%',
    dataIndex: ['statistics', 'fieldGoalsPercentage'],
    render: (value: number) => (value * 100).toFixed(1),
    onCell: sharedOnCell,
  },
  {
    title: '3PM',
    dataIndex: ['statistics', 'threePointersMade'],
    onCell: sharedOnCell,
  },
  {
    title: '3PA',
    dataIndex: ['statistics', 'threePointersAttempted'],
    onCell: sharedOnCell,
  },
  {
    title: '3P%',
    dataIndex: ['statistics', 'threePointersPercentage'],
    render: (value: number) => (value * 100).toFixed(1),
    onCell: sharedOnCell,
  },
  {
    title: 'FTM',
    dataIndex: ['statistics', 'freeThrowsMade'],
    onCell: sharedOnCell,
  },
  {
    title: 'FTA',
    dataIndex: ['statistics', 'freeThrowsAttempted'],
    onCell: sharedOnCell,
  },
  {
    title: 'FT%',
    dataIndex: ['statistics', 'freeThrowsPercentage'],
    render: (value: number) => (value * 100).toFixed(1),
    onCell: sharedOnCell,
  },
  {
    title: 'OREB',
    dataIndex: ['statistics', 'reboundsOffensive'],
    onCell: sharedOnCell,
  },
  {
    title: 'DREB',
    dataIndex: ['statistics', 'reboundsDefensive'],
    onCell: sharedOnCell,
  },
  {
    title: 'REB',
    dataIndex: ['statistics', 'reboundsTotal'],
    onCell: sharedOnCell,
  },
  {
    title: 'AST',
    dataIndex: ['statistics', 'assists'],
    onCell: sharedOnCell,
  },
  {
    title: 'STL',
    dataIndex: ['statistics', 'steals'],
    onCell: sharedOnCell,
  },
  {
    title: 'BLK',
    dataIndex: ['statistics', 'blocks'],
    onCell: sharedOnCell,
  },
  {
    title: 'TO',
    dataIndex: ['statistics', 'turnovers'],
    onCell: sharedOnCell,
  },
  {
    title: 'PF',
    dataIndex: ['statistics', 'foulsPersonal'],
    onCell: sharedOnCell,
  },
  {
    title: 'PTS',
    dataIndex: ['statistics', 'points'],
    onCell: sharedOnCell,
  },
  {
    title: '+/-',
    dataIndex: ['statistics', 'plusMinusPoints'],
    onCell: sharedOnCell,
  },
];
