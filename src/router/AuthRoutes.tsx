import React from 'react';
import { NotFoundPage } from '@pages';
import { Route, Routes } from 'react-router-dom';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
