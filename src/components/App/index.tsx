import { FC, ReactNode, Suspense } from 'react';
import { Spin } from 'antd';
import Navigation from '../Navigation';

import styles from './index.module.css';

interface AppProps {
  children: ReactNode;
}

export const App: FC<AppProps> = ({ children }) => {
  const appStyles = `${styles.app} container`;

  return (
    <>
      <Navigation />
      <Suspense fallback={<Spin />}>
        <main>{children}</main>
      </Suspense>
    </>
  );
};
