import { FC } from 'react';
import { Button } from 'antd';
import { useActions } from '@/hooks/useActions';
import Navigation from '../Navigation';

import styles from './index.module.css';

const Header: FC = () => {
  const { setThemeAlgorithm } = useActions();

  const onClickChangeThemeAlgorithm = () => {
    setThemeAlgorithm();
  };

  return (
    <div className={styles.header}>
      <Navigation />
      <Button onClick={onClickChangeThemeAlgorithm}>Change theme</Button>
    </div>
  );
};

export default Header;
