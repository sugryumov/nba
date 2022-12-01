import { FC } from 'react';
import { Card, Select } from 'antd';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { options } from './options';

import './index.css';

const StandingsSettings: FC = () => {
  const { groupBy } = useTypedSelector(state => state.standingsReducer);
  const { setGroupBy } = useActions();

  const handleChangeStandings = (value: string) => {
    setGroupBy(value);
  };

  return (
    <Card className="standings__settings">
      <div className="standings__settings--inner">
        <p className="standings__settings--title">
          '22 - '23 Regular Season Standings
        </p>

        <Select
          defaultValue={groupBy}
          style={{ width: 120 }}
          onChange={handleChangeStandings}
          options={options}
          className="standings__settings--select"
        />
      </div>
    </Card>
  );
};

export default StandingsSettings;
