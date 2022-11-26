import { FC } from 'react';
import { Button, Layout } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import { useActions } from '@/hooks/useActions';
import AppMenu from '../AppMenu';

const AppHeader: FC = () => {
  const { setThemeAlgorithm } = useActions();

  const onClickChangeThemeAlgorithm = () => {
    setThemeAlgorithm();
  };

  return (
    <>
      <AppMenu />
      <Button
        type="primary"
        icon={<ThunderboltOutlined />}
        onClick={onClickChangeThemeAlgorithm}
      />
    </>
  );
};

export default AppHeader;
