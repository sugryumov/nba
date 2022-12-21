import { FC, Key, useEffect } from 'react';
import { Table } from 'antd';
import { ShotChartResponseDto } from '@/types/response/shotChart';
import { useLazyFetchVideoEventQuery } from '@/services/videoEventService';
import { columns } from './columns';

import './index.css';

type ShotChartTableProps = {
  data: ShotChartResponseDto[];
};

const ShotChartTable: FC<ShotChartTableProps> = ({ data }) => {
  const [fetchVideo, { data: video }] = useLazyFetchVideoEventQuery();

  useEffect(() => {
    if (data) {
      const [firstRow] = data;

      fetchVideo({
        gameId: firstRow.gameId,
        gameEventId: firstRow.gameEventId,
      });
    }
  }, [data]);

  const rowSelection = {
    onChange: (_: Key[], selectedRows: ShotChartResponseDto[]) => {
      const [row] = selectedRows;

      fetchVideo({
        gameId: row.gameId,
        gameEventId: row.gameEventId,
      });
    },
  };

  return (
    <>
      <video
        autoPlay
        controls
        src={video?.videoUrl}
        poster={video?.videoPoster}
        className="shot-chart__table--video"
      />
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
          defaultSelectedRowKeys: [data[0].gameEventId],
          ...rowSelection,
        }}
      />
    </>
  );
};

export default ShotChartTable;
