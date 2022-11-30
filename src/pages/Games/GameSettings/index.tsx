import { FC } from 'react';
import { Card, DatePicker, Grid, Switch, Typography } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { parseDateFromYMD } from '@/helpers/parseDate';

import styles from './index.module.css';

const GameSettings: FC = () => {
  const isMobile = Grid.useBreakpoint().xs;

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
    <Card
      className={styles.card}
      bodyStyle={{ padding: `${isMobile ? '20px 15px' : '20px'}` }}
    >
      <div className={styles.inner}>
        <DatePicker
          allowClear={false}
          className={styles.datePicker}
          onChange={onChangeGameDate}
          defaultValue={parseDateFromYMD(gameDate)}
        />

        <div className={styles.showScore}>
          <Typography.Text className={styles.text}>SHOW SCORE</Typography.Text>
          <Switch defaultChecked={isShowScore} onChange={onChangeShowScore} />
        </div>
      </div>
    </Card>
  );
};

export default GameSettings;
