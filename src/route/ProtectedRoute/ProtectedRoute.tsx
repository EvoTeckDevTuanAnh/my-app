import React, { FC, useContext } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { AppContext } from '../../provider/AppContextProvider';
import styles from './ProtectedRoute.module.scss';

interface ProtectedRouteProps {
  path?: string,
  component?: any,
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ path, component }) => {
  const { token } = useContext(AppContext);
  if (!token) {
    return <Redirect to="/" />;
  }

  return (<Route path={path} component={component} />);
};

export default ProtectedRoute;
