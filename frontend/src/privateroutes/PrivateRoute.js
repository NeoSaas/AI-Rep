import React, {useEffect} from 'react';
import { Outlet, Navigate, useNavigate, Route } from 'react-router-dom';
import { Component } from 'react';


const PrivateRoute = ({isAuthenticated,}) => {
    const nav = useNavigate();
    if(isAuthenticated){
        return <Outlet/>;
    }     
    else{
        return nav('/');
    }
};

export default PrivateRoute;