import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../../Components/Context/UserContext';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useUserContext();
  const location = useLocation();

  if (!currentUser) {
    const url = `/sign-in`;
    return <Navigate to={url} state={{ from: location.pathname }} replace />;

  }

  return children || null;
}
