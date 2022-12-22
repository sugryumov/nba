import { FC, Key, useEffect } from 'react';
import { Table } from 'antd';
import { ShotChartResponseDto } from '@/types/response/shotChart';
import { useActions } from '@/hooks/useActions';
import { columns } from './columns';

import './index.css';

type ShotChartTableProps = {
  data: ShotChartResponseDto[];
};

const ShotChartTable: FC<ShotChartTableProps> = ({ data }) => {
  const [firstRow] = data;
  const { gameId, gameEventId } = firstRow;

  const { setShotChartVideo } = useActions();

  useEffect(() => {
    setShotChartVideo({
      gameId,
      gameEventId,
    });
  }, [data]);

  const rowSelection = {
    onChange: (_: Key[], selectedRows: ShotChartResponseDto[]) => {
      const [row] = selectedRows;
      const { gameId, gameEventId } = row;

      setShotChartVideo({
        gameId,
        gameEventId,
      });
    },
  };

  return (
    <Table
      size="small"
      rowKey="gameEventId"
      dataSource={data}
      columns={columns}
      pagination={false}
      className="table"
      rowSelection={{
        fixed: true,
        type: 'radio',
        defaultSelectedRowKeys: [gameEventId],
        ...rowSelection,
      }}
    />
  );
};

export default ShotChartTable;
