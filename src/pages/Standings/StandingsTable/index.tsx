import { FC, ReactNode } from 'react';
import { Table } from 'antd';
import { StandingsResponseDto } from '@/types/response/standings';
import { columns } from './columns';

import styles from './index.module.css';

type StandingsTableProps = {
  title: ReactNode;
  data: StandingsResponseDto[];
};

const StandingsTable: FC<StandingsTableProps> = ({ title, data }) => {
  const renderTableTitle = () => <p className={styles.title}>{title}</p>;

  return (
    <Table
      size="small"
      rowKey="teamId"
      title={renderTableTitle}
      dataSource={data}
      columns={columns}
      pagination={false}
      className={styles.table}
    />
  );
};

export default StandingsTable;
