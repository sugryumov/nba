import { Link } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';
import { ROUTES } from '@/constants/routes';
import { BoxScoreAndMatchInfo } from '@/types/response/boxScore';

const renderPlayerNameColumn = (_: string, record: BoxScoreAndMatchInfo) => {
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
};

const renderMinutesColumn = (value: string, record: BoxScoreAndMatchInfo) => {
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
};

const renderShotChartLinkColumn =
  // eslint-disable-next-line react/display-name
  (type: string) => (text: number, record: BoxScoreAndMatchInfo) => {
    const { personId, teamId, gameId } = record;
    const toVideoEventsPath = `${ROUTES.SHOT_CHART.PATH}?teamId=${teamId}&gameId=${gameId}&playerId=${personId}&type=${type}`;

    return (
      <>{text ? <Link to={toVideoEventsPath}>{text}</Link> : <p>{text}</p>}</>
    );
  };

const sharedOnCell = (data: BoxScoreAndMatchInfo) =>
  Number(data.played) ? {} : { colSpan: 0 };

export const columns: ColumnsType<BoxScoreAndMatchInfo> = [
  {
    title: 'Player',
    fixed: true,
    render: renderPlayerNameColumn,
  },
  {
    title: 'MIN',
    dataIndex: ['statistics', 'minutes'],
    render: renderMinutesColumn,
    onCell: ({ played }) => (Number(played) ? {} : { colSpan: 20 }),
  },
  {
    title: 'FGM',
    dataIndex: ['statistics', 'fieldGoalsMade'],
    onCell: sharedOnCell,
    render: renderShotChartLinkColumn('FGM'),
  },
  {
    title: 'FGA',
    dataIndex: ['statistics', 'fieldGoalsAttempted'],
    onCell: sharedOnCell,
    render: renderShotChartLinkColumn('FGA'),
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
    render: renderShotChartLinkColumn('FG3M'),
  },
  {
    title: '3PA',
    dataIndex: ['statistics', 'threePointersAttempted'],
    onCell: sharedOnCell,
    render: renderShotChartLinkColumn('FG3A'),
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
