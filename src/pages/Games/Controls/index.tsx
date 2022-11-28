import { FC } from 'react';
import { Card, Col, DatePicker, Row, Switch, Typography } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { parseDateFromYMD } from '@/helpers/parseDate';

import styles from './index.module.css';

const Controls: FC = () => {
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
    <Card className={styles.card}>
      <Row align="middle">
        <Col span={12}>
          <DatePicker
            allowClear={false}
            onChange={onChangeGameDate}
            defaultValue={parseDateFromYMD(gameDate)}
          />
        </Col>

        <Col span={12} className={styles.showScore}>
          <Typography.Text className={styles.text}>SHOW SCORE</Typography.Text>
          <Switch defaultChecked={isShowScore} onChange={onChangeShowScore} />
        </Col>
      </Row>
    </Card>
  );
};

export default Controls;
