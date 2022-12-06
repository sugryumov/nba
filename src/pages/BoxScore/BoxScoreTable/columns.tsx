export const columns = [
  {
    title: 'Player',
    dataIndex: 'name',
    render: (_: string, record: any) => {
      const { name, position } = record;

      return `${name} ${position ?? ''}`;
    },
  },
  {
    title: 'MIN',
    dataIndex: ['statistics', 'minutes'],
    render: (value: string) => {
      const [min, sec] = value.split('M');

      return `${min.match(/\d+/)}:${sec.match(/\d+/)}`;
    },
  },
  {
    title: 'FGM',
    dataIndex: ['statistics', 'fieldGoalsMade'],
  },
  {
    title: 'FGA',
    dataIndex: ['statistics', 'fieldGoalsAttempted'],
  },
  {
    title: 'FG%',
    dataIndex: ['statistics', 'fieldGoalsPercentage'],
    render: (value: number) => (value * 100).toFixed(1),
  },
  {
    title: '3PM',
    dataIndex: ['statistics', 'threePointersMade'],
  },
  {
    title: '3PA',
    dataIndex: ['statistics', 'threePointersAttempted'],
  },
  {
    title: '3P%',
    dataIndex: ['statistics', 'threePointersPercentage'],
    render: (value: number) => (value * 100).toFixed(1),
  },
  {
    title: 'FTM',
    dataIndex: ['statistics', 'freeThrowsMade'],
  },
  {
    title: 'FTA',
    dataIndex: ['statistics', 'freeThrowsAttempted'],
  },
  {
    title: 'FT%',
    dataIndex: ['statistics', 'freeThrowsPercentage'],
    render: (value: number) => (value * 100).toFixed(1),
  },
  {
    title: 'OREB',
    dataIndex: ['statistics', 'reboundsOffensive'],
  },
  {
    title: 'DREB',
    dataIndex: ['statistics', 'reboundsDefensive'],
  },
  {
    title: 'REB',
    dataIndex: ['statistics', 'reboundsTotal'],
  },
  {
    title: 'AST',
    dataIndex: ['statistics', 'assists'],
  },
  {
    title: 'STL',
    dataIndex: ['statistics', 'steals'],
  },
  {
    title: 'BLK',
    dataIndex: ['statistics', 'blocks'],
  },
  {
    title: 'TO',
    dataIndex: ['statistics', 'turnovers'],
  },
  {
    title: 'PF',
    dataIndex: ['statistics', 'foulsPersonal'],
  },
  {
    title: 'PTS',
    dataIndex: ['statistics', 'points'],
  },
  {
    title: '+/-',
    dataIndex: ['statistics', 'plusMinusPoints'],
  },
];
