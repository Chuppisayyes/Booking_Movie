import React from 'react'
import { useUserContext } from '../../contexts/UserContext/UserContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const { currentUser } = useUserContext();
    const location = useLocation();

    if (!currentUser) {
        const url = `/sign-in?redirectTo=${location.pathname}`
        return <Navigate to={url} replace />
    }
    return (
        children || <Outlet />
    )

}
