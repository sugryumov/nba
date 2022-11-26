import { FC, ReactNode, Suspense } from 'react';
import { ConfigProvider, Spin, theme } from 'antd';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Header from '../Header';

import styles from './index.module.css';

type AppProps = {
  children: ReactNode;
};

export const App: FC<AppProps> = ({ children }) => {
  const { themeAlgorithm } = useTypedSelector(state => state.themeReducer);

  const algorithm = theme[themeAlgorithm];

  return (
    <div className={styles.app}>
      <ConfigProvider theme={{ algorithm }}>
        <Header />

        <Suspense fallback={<Spin />}>
          <main>{children}</main>
        </Suspense>
      </ConfigProvider>
    </div>
  );
};
