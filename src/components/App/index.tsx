import { FC, ReactNode, Suspense } from 'react';
import { ConfigProvider, Layout, Spin, theme } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import AppHeader from '../AppHeader';

import styles from './index.module.css';

const { Header, Content } = Layout;

type AppProps = {
  children: ReactNode;
};

const App: FC<AppProps> = ({ children }) => {
  const { themeAlgorithm } = useTypedSelector(state => state.themeReducer);

  const algorithm = theme[themeAlgorithm];

  return (
    <ConfigProvider theme={{ algorithm }}>
      <Layout className={styles.app}>
        <Header className={styles.header}>
          <AppHeader />
        </Header>

        <Content className={styles.content}>
          <Suspense fallback={<Spin />}>
            <main>{children}</main>
          </Suspense>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
