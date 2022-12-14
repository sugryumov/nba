import { lazy, Suspense } from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import styles from './index.module.css';

const LazyRouter = lazy(() =>
  import('../AppRouter').then(({ AppRouter }) => ({
    default: AppRouter,
  })),
);

const App = () => {
  const { themeAlgorithm } = useTypedSelector(state => state.themeReducer);
  const algorithm = theme[themeAlgorithm];

  return (
    <ConfigProvider theme={{ algorithm }}>
      <Layout className={styles.app}>
        <Suspense>
          <LazyRouter />
        </Suspense>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
