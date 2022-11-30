import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import AppLayout from '../AppLayout';

export const AppRouter = () => {
  const Games = React.lazy(() => import('../../pages/Games'));
  const Standings = React.lazy(() => import('../../pages/Standings'));

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path={ROUTES.GAMES.PATH} element={<Games />} />
          <Route path={ROUTES.STANDINGS.PATH} element={<Standings />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
