import { FC } from 'react';
import { Tabs } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { GAME_INFO_TABS } from '@/constants/gameInfoTabs';
import BoxScore from './BoxScore';
import PlayByPlay from './PlayByPlay';

import './index.css';

const GameInfo: FC = () => {
  const { setGameInfoTab } = useActions();
  const { activeTab } = useTypedSelector(store => store.gameInfoReducer);

  const onChange = (key: string) => {
    setGameInfoTab(key);
  };

  return (
    <Tabs
      onChange={onChange}
      defaultActiveKey={activeTab}
      tabBarStyle={{ margin: '20px 0 0' }}
      items={[
        {
          label: 'Box Score',
          key: GAME_INFO_TABS.BOX_SCORE,
          children: <BoxScore />,
        },
        {
          label: 'Play By Play',
          key: GAME_INFO_TABS.PLAY_BY_PLAY,
          children: <PlayByPlay />,
        },
      ]}
    />
  );
};

export default GameInfo;
