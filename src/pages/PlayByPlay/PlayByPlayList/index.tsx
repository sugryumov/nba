import { FC, SetStateAction, useState } from 'react';
import Segmented, { SegmentedValue } from 'antd/es/segmented';
import { PlayByPlayResponseDto } from '@/types/response/playByPlay';
import { playByPlayOptions } from '@/helpers/prepareOptions';
import PlayByPlayItem from './PlayByPlayItem';

import './index.css';

type PlayByPlayListProps = {
  list: PlayByPlayResponseDto[];
};

const PlayByPlayList: FC<PlayByPlayListProps> = ({ list }) => {
  const [activePeriod, setActivePeriod] = useState<SegmentedValue>(1);

  const numberPeriod = [...new Set(list?.map(({ period }) => period))];

  const generateOptions = numberPeriod?.map(period =>
    playByPlayOptions(period),
  );

  const onChange = (value: SetStateAction<SegmentedValue>) => {
    setActivePeriod(value);
  };

  const filteredData = list?.filter(item => item.period === activePeriod);

  const renderItem = filteredData?.map(item => (
    <PlayByPlayItem key={item.eventNum} item={item} />
  ));

  return (
    <>
      <Segmented
        block
        size="large"
        defaultValue={activePeriod}
        options={generateOptions}
        onChange={onChange}
        className="play-by-play__segmented"
      />

      {renderItem}
    </>
  );
};

export default PlayByPlayList;
