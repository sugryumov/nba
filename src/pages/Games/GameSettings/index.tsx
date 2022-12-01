import { FC } from 'react';
import { Card, DatePicker, Switch, Typography } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { parseDateFromYMD } from '@/helpers/parseDate';

import './index.css';

const GameSettings: FC = () => {
  const { setGameDate, setShowScore } = useActions();
  const { gameDate, isShowScore } = useTypedSelector(
    state => state.gamesReducer,
  );

  const onChangeGameDate = (_: unknown, dateString: string) => {
    setGameDate(dateString);
  };

  const onChangeShowScore = (checked: boolean) => {
    setShowScore(checked);
  };

  return (
    <Card className="game__settings">
      <div className="game__settings--inner">
        <DatePicker
          allowClear={false}
          className="game__settings--date-picker"
          onChange={onChangeGameDate}
          defaultValue={parseDateFromYMD(gameDate)}
        />

        <div className="game__settings--show-score">
          <Typography.Text className="game__settings--text">
            SHOW SCORE
          </Typography.Text>
          <Switch defaultChecked={isShowScore} onChange={onChangeShowScore} />
        </div>
      </div>
    </Card>
  );
};

export default GameSettings;
