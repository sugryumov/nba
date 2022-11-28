import { FC, ReactNode } from 'react';
import { Result, Spin } from 'antd';

import styles from './index.module.css';

type GetDataLayoutProps = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
  emptyText?: string;
};

const GetDataLayout: FC<GetDataLayoutProps> = ({
  data,
  isLoading,
  isError,
  children,
  emptyText = 'No data',
}) => {
  if (isLoading) {
    return <Spin size="large" className={styles.wrapper} />;
  }

  if (isError) {
    return (
      <Result status="error" title="There are some problems with server" />
    );
  }

  if (!data.length) {
    return <Result status="info" title={emptyText} icon={null} />;
  }

  return <>{children}</>;
};

export default GetDataLayout;
