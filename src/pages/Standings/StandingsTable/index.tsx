import { FC, ReactNode } from 'react';
import { Table } from 'antd';
import { StandingsResponseDto } from '@/types/response/standings';
import { columns } from './columns';

import './index.css';

type StandingsTableProps = {
  title: ReactNode;
  data: StandingsResponseDto[];
};

const StandingsTable: FC<StandingsTableProps> = ({ title, data }) => {
  const renderTableTitle = () => <p className="title">{title}</p>;

  return (
    <Table
      size="small"
      rowKey="teamId"
      title={renderTableTitle}
      dataSource={data}
      columns={columns}
      pagination={false}
      className="standings__table"
    />
  );
};

export default StandingsTable;
