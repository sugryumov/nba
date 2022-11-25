import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Spin } from 'antd';
import { store } from '@/store';
import './index.css';

const LazyRouter = lazy(() =>
  import('./components/AppRouter').then(({ AppRouter }) => ({
    default: AppRouter,
  })),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spin />}>
        <LazyRouter />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
