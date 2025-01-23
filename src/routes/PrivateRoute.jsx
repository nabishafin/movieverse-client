import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';  // Ensure Navigate is imported
import LoadingSpinner from '../shared/LoadingSpinner';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    // Show loading spinner while authentication status is being determined
    if (loading) return <LoadingSpinner />;

    // If the user is authenticated, render the children components
    if (user) return children;

    // Redirect to login page if user is not authenticated
    return <Navigate to="/login" />;
};

export default PrivateRoute;
