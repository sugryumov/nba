import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import AppLayout from '../AppLayout';

export const AppRouter = () => {
  const Scoreboard = React.lazy(() => import('../../pages/Scoreboard'));
  const BoxScore = React.lazy(() => import('../../pages/BoxScore'));

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path={ROUTES.SCOREBOARD.PATH} element={<Scoreboard />} />
          <Route path={ROUTES.BOX_SCORE.PATH} element={<BoxScore />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
