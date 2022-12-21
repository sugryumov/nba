import { Link } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';
import { ROUTES } from '@/constants/routes';
import { ShotChartResponseDto } from '@/types/response/shotChart';
import { prepareTime } from '@/helpers/parseDate';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

export const columns: ColumnsType<ShotChartResponseDto> = [
  {
    title: 'Player',
    dataIndex: 'playerName',
  },
  {
    title: 'Player Type',
    dataIndex: 'actionType',
  },
  {
    title: 'Made',
    render: (_, record) => {
      const { shotMadeFlag, eventType } = record;
      return (
        <>
          {shotMadeFlag ? (
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          ) : (
            <CloseCircleTwoTone twoToneColor="crimson" />
          )}

          <span className="shot-chart__table--type">{eventType}</span>
        </>
      );
    },
  },
  {
    title: 'Shot Type',
    dataIndex: 'shotType',
  },
  {
    title: 'Box Score',
    render: (_, record) => {
      const { gameId, homeTeam, visitorTeam } = record;
      const toBoxScorePath = `${ROUTES.BOX_SCORE.PATH}?id=${gameId}`;

      return <Link to={toBoxScorePath}>{`${visitorTeam} @ ${homeTeam}`}</Link>;
    },
  },
  {
    title: 'Period',
    dataIndex: 'period',
  },
  {
    title: 'Time Remaining',
    render: (_, record) =>
      `${prepareTime(record.minutesRemaining)}:${prepareTime(
        record.secondsRemaining,
      )}`,
  },
  {
    title: 'Shot Distance (FT)',
    dataIndex: 'shotDistance',
  },
  {
    title: 'Team',
    dataIndex: 'teamName',
  },
];
