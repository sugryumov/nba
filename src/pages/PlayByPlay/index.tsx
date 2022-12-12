import { FC, SetStateAction, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Segmented } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import { useFetchPlayByPlayQuery } from '@/services/playByPlayService';
import GetDataLayout from '@/components/GetDataLayout';
import { playByPlayOptions } from '@/helpers/prepareOptions';
import PlayByPlayHeader from './PlayByPlayHeader';
import PlayByPlayItem from './PlayByPlayItem';

import './index.css';

const PlayByPlay: FC = () => {
  const { search } = useLocation();
  const gameId = new URLSearchParams(search).get('id')!;
  const { data, isFetching, isError } = useFetchPlayByPlayQuery(gameId);

  const numberPeriod = [...new Set(data?.map(({ period }) => period))];

  const generateOptions = numberPeriod?.map(period =>
    playByPlayOptions(period),
  );

  const [activePeriod, setActivePeriod] = useState<SegmentedValue>(1);

  const onChange = (value: SetStateAction<SegmentedValue>) => {
    setActivePeriod(value);
  };

  const filteredData = data?.filter(item => item.period === activePeriod);

  return (
    <GetDataLayout data={data} isLoading={isFetching} isError={isError}>
      <Card className="play-by-play">
        <Segmented
          block
          size="large"
          defaultValue={activePeriod}
          options={generateOptions}
          onChange={onChange}
          className="play-by-play__segmented"
        />
        <PlayByPlayHeader />
        {filteredData?.map(item => (
          <PlayByPlayItem key={item.eventNum} item={item} />
        ))}
      </Card>
    </GetDataLayout>
  );
};

export default PlayByPlay;
