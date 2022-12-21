import { FC } from 'react';
import { Table } from 'antd';
import { BoxScoreAndMatchInfo, BoxScoreTeam } from '@/types/response/boxScore';
import { columns } from './columns';
import Summary from './Summary';

import './index.css';

type BoxScoreTableProps = {
  data: BoxScoreTeam;
  gameId: string;
};

const BoxScoreTable: FC<BoxScoreTableProps> = ({ data, gameId }) => {
  const { teamCity, teamName, teamId, players, statistics } = data;

  const filteredPlayers: BoxScoreAndMatchInfo[] = players
    .filter(player => player.status === 'ACTIVE')
    .map(player => ({ ...player, teamId, gameId }));

  const renderTitle = () => (
    <p className="title">
      {teamCity} {teamName}
    </p>
  );

  return (
    <Table
      size="small"
      rowKey="name"
      title={renderTitle}
      dataSource={filteredPlayers}
      columns={columns}
      pagination={false}
      className="table box-score__table"
      summary={() => <Summary statistics={statistics} />}
    />
  );
};

export default BoxScoreTable;
