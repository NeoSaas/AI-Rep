import React from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { Component } from 'react';

const PrivateRoute = ({isAuthenticated }) => {
    const nav = useNavigate();
    return isAuthenticated ? <Outlet /> : nav('/');
};

export default PrivateRoute;