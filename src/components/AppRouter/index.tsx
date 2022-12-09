import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import AppLayout from '../AppLayout';

export const AppRouter = () => {
  const Games = React.lazy(() => import('../../pages/Games'));
  const Standings = React.lazy(() => import('../../pages/Standings'));
  const BoxScore = React.lazy(() => import('../../pages/BoxScore'));
  const PlayByPlay = React.lazy(() => import('../../pages/PlayByPlay'));

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path={ROUTES.GAMES.PATH} element={<Games />} />
          <Route path={ROUTES.STANDINGS.PATH} element={<Standings />} />
          <Route path={ROUTES.BOX_SCORE.PATH} element={<BoxScore />} />
          <Route path={ROUTES.PLAY_BY_PLAY.PATH} element={<PlayByPlay />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
