import React, {useEffect} from 'react';
import { Outlet, Navigate, useNavigate, Route } from 'react-router-dom';
import { Component } from 'react';


class ProtectedRoute extends Route {
    

    render(){
        const {element, isAuthenticated, ...rest} = this.props
        const nav = useNavigate();

        return(
            <Route 
                {...rest}
                element={(element) => isAuthenticated ? (<Outlet/>) : nav('/')}
            >
            </Route>
        );
    }
    
}



export default ProtectedRoute