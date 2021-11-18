import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component, path }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const isLoggedIn = userInfo || localStorage.getItem('userInfo');
  return isLoggedIn ?  <Route element={<component/>} exact path={path} /> : <Redirect to="/" />;
};

ProtectedRoute.propTypes = {
  component: propTypes.object.isRequired,
  path: propTypes.string.isRequired,
};

export default ProtectedRoute;