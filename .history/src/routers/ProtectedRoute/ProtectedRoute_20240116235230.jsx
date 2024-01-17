import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useUserContext } from '../../Components/Context/UserContext';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useUserContext();
  const location = useLocation();

  if (!currentUser) {
    const url = `/sign-in`;
    return <Redirect to={{ pathname: url, state: { from: location.pathname } }} />;
  }

  return children || null;
}
