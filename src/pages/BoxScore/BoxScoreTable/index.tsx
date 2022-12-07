import { FC } from 'react';
import { Table } from 'antd';
import { BoxScoreTeam } from '@/types/response/boxScore';
import { columns } from './columns';
import Summary from './Summary';

import './index.css';

type BoxScoreTableProps = {
  data: BoxScoreTeam;
};

const BoxScoreTable: FC<BoxScoreTableProps> = ({ data }) => {
  const { teamCity, teamName, players, statistics } = data;
  const filteredPlayers = players.filter(player => player.status === 'ACTIVE');

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
      className="box-score__table"
      summary={() => <Summary statistics={statistics} />}
    />
  );
};

export default BoxScoreTable;
