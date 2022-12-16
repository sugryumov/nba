import { Link } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';
import { ROUTES } from '@/constants/routes';
import { BoxScoreAndMatchInfo } from '@/types/response/boxScore';

const sharedOnCell = (data: BoxScoreAndMatchInfo) =>
  Number(data.played) ? {} : { colSpan: 0 };

const renderLinkColumn =
  // eslint-disable-next-line react/display-name
  (type: string) => (text: number, record: BoxScoreAndMatchInfo) => {
    const { personId, teamId, gameId } = record;
    const toVideoEventsPath = `${ROUTES.VIDEO_EVENTS.PATH}?teamId=${teamId}&gameId=${gameId}&playerId=${personId}&type=${type}`;

    return (
      <>{text ? <Link to={toVideoEventsPath}>{text}</Link> : <p>{text}</p>}</>
    );
  };

export const columns: ColumnsType<BoxScoreAndMatchInfo> = [
  {
    title: 'Player',
    fixed: true,
    render: (_, record) => {
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
    render: (value, record) => {
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
    render: renderLinkColumn('FGM'),
  },
  {
    title: 'FGA',
    dataIndex: ['statistics', 'fieldGoalsAttempted'],
    onCell: sharedOnCell,
    render: renderLinkColumn('FGA'),
  },
  {
    title: 'FG%',
    dataIndex: ['statistics', 'fieldGoalsPercentage'],
    render: value => (value * 100).toFixed(1),
    onCell: sharedOnCell,
  },
  {
    title: '3PM',
    dataIndex: ['statistics', 'threePointersMade'],
    onCell: sharedOnCell,
    render: renderLinkColumn('3PM'),
  },
  {
    title: '3PA',
    dataIndex: ['statistics', 'threePointersAttempted'],
    onCell: sharedOnCell,
    render: renderLinkColumn('3PA'),
  },
  {
    title: '3P%',
    dataIndex: ['statistics', 'threePointersPercentage'],
    render: value => (value * 100).toFixed(1),
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
    render: value => (value * 100).toFixed(1),
    onCell: sharedOnCell,
  },
  {
    title: 'OREB',
    dataIndex: ['statistics', 'reboundsOffensive'],
    onCell: sharedOnCell,
    render: renderLinkColumn('OREB'),
  },
  {
    title: 'DREB',
    dataIndex: ['statistics', 'reboundsDefensive'],
    onCell: sharedOnCell,
    render: renderLinkColumn('DREB'),
  },
  {
    title: 'REB',
    dataIndex: ['statistics', 'reboundsTotal'],
    onCell: sharedOnCell,
    render: renderLinkColumn('REB'),
  },
  {
    title: 'AST',
    dataIndex: ['statistics', 'assists'],
    onCell: sharedOnCell,
    render: renderLinkColumn('AST'),
  },
  {
    title: 'STL',
    dataIndex: ['statistics', 'steals'],
    onCell: sharedOnCell,
    render: renderLinkColumn('STL'),
  },
  {
    title: 'BLK',
    dataIndex: ['statistics', 'blocks'],
    onCell: sharedOnCell,
    render: renderLinkColumn('BLK'),
  },
  {
    title: 'TO',
    dataIndex: ['statistics', 'turnovers'],
    onCell: sharedOnCell,
    render: renderLinkColumn('TO'),
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
