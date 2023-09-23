import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
// import { ClimbingBoxLoader } from 'react-spinners';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <div className='text-red-500 text-center mb-20 font-bold text-5xl mt-7'>

                <RingLoader color="#C60315" />
            </div>
        </div>

    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;