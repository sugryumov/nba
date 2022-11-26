import { FC, ReactNode, Suspense } from 'react';
import { Layout, Spin, theme } from 'antd';
import AppHeader from '../AppHeader';

import styles from './index.module.css';

const { Header, Content } = Layout;
const { useToken } = theme;

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { token } = useToken();

  const headerStyles = {
    backgroundColor: token.colorBgContainer,
    borderBottom: `1px solid ${token.colorBorderSecondary}`,
  };

  return (
    <>
      <Header style={headerStyles} className={styles.header}>
        <AppHeader />
      </Header>

      <Content className={styles.content}>
        <Suspense fallback={<Spin />}>{children}</Suspense>
      </Content>
    </>
  );
};

export default AppLayout;
