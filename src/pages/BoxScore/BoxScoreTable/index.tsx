import { FC } from 'react';
import { Table } from 'antd';
import { BoxScoreTeam } from '@/types/response/boxScore';
import { columns } from './columns';

import './index.css';

type BoxScoreTableProps = {
  data: BoxScoreTeam;
};

const BoxScoreTable: FC<BoxScoreTableProps> = ({ data }) => {
  const { teamCity, teamName, players } = data;

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
      dataSource={players}
      columns={columns}
      pagination={false}
      className="box-score__table"
    />
  );
};

export default BoxScoreTable;
