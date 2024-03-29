import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import AppLayout from '../AppLayout';

export const AppRouter = () => {
  const Games = React.lazy(() => import('../../pages/Games'));
  const GameInfo = React.lazy(() => import('../../pages/GameInfo'));
  const Standings = React.lazy(() => import('../../pages/Standings'));
  const ShotChart = React.lazy(() => import('../../pages/ShotChart'));

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path={ROUTES.GAMES.PATH} element={<Games />} />
          <Route path={ROUTES.GAME_INFO.PATH} element={<GameInfo />} />
          <Route path={ROUTES.STANDINGS.PATH} element={<Standings />} />
          <Route path={ROUTES.SHOT_CHART.PATH} element={<ShotChart />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
