import React from 'react';
import { Outlet } from 'react-router';
import Navigation from '../Component/Pages/Navigation';

const Toggle = () => {
    return (
        <div>
            <Navigation />
            <Outlet></Outlet>
        </div>
    );
};

export default Toggle;