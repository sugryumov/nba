import { FC } from 'react';
import { Card, DatePicker } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { parseDateFromYMD } from '@/helpers/parseDate';

import styles from './index.module.css';

const Controls: FC = () => {
  const { setGameDate } = useActions();
  const { gameDate } = useTypedSelector(state => state.gamesReducer);

  const onChangeGameDate = (_: unknown, dateString: string) => {
    setGameDate(dateString);
  };

  return (
    <Card className={styles.card}>
      <DatePicker
        size="large"
        allowClear={false}
        onChange={onChangeGameDate}
        defaultValue={parseDateFromYMD(gameDate)}
      />
    </Card>
  );
};

export default Controls;
