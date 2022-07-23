import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LandingPage from '../LandingPage';

const PrivateRoute = () => {
  const selector = useSelector((state) => state.persistedReducer.currentTeen);
  return selector?.token ? Navigate('questions') : <LandingPage />;
};

export default PrivateRoute;
