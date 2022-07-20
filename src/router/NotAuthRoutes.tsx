import React from 'react';
import { LoginPage, RegistrationPage } from '@pages';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RoutesEnum } from './index';

export const NotAuthRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.LOGIN} element={<LoginPage />} />
      <Route path={RoutesEnum.REGISTRATION} element={<RegistrationPage />} />
      <Route path="*" element={<Navigate to={RoutesEnum.LOGIN} />} />
    </Routes>
  );
};
