import React, { useState } from 'react';
import { NotAuthRoutes, AuthRoutes } from './index';

export const AppRouter = () => {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      { isAuth ? <AuthRoutes /> : <NotAuthRoutes /> }
    </>
  );
};
