import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const {pathname} = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [navigateToLogin, setNavigateToLogin] = useState(null);

    useEffect(()=>{
        if(!isLoggedIn){
            setTimeout(()=>{
            setNavigateToLogin(true);
            },3000);
        }
        else{
            setTimeout(()=>{
            setNavigateToLogin(false);
            },3000);
        }
    },[isLoggedIn]);

    if(navigateToLogin){
        return <Navigate to="/login" replace={true} state={pathname}/>
    }
    else if(navigateToLogin===false){
        return <Outlet/>
    }
}

export default ProtectedRoute