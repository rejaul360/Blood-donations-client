import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(!user){
        alert('please login first')
    }
    if (loading) {
        return <h3 className='text-red-500 text-center fw-bold text-5xl mt-7'>
         <progress className="progress w-56"></progress>
        </h3>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;