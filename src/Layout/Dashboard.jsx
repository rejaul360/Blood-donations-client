import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <NavLink to='/admin/allusers'>All Users Here</NavLink>
                <NavLink to='/admin/allpost'>All Post here</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard; <Outlet></Outlet>