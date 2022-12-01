import { FC } from 'react';
import { Button } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import { useActions } from '@/hooks/useActions';
import AppMenu from '../AppMenu';

import styles from './index.module.css';

const AppHeader: FC = () => {
  const { setThemeAlgorithm } = useActions();

  const onClickChangeThemeAlgorithm = () => {
    setThemeAlgorithm();
  };

  return (
    <div className={`container ${styles.wrapper}`}>
      <AppMenu />
      <Button
        type="primary"
        icon={<ThunderboltOutlined />}
        onClick={onClickChangeThemeAlgorithm}
      />
    </div>
  );
};

export default AppHeader;
