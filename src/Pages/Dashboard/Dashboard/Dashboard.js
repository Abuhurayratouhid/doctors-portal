import React from 'react';
import { Outlet } from 'react-router-dom';
import MyAppointment from '../MyAppointment/MyAppointment';

const Dashboard = () => {
    return (
        <div>
            

            <MyAppointment></MyAppointment>
        </div>
    );
};

export default Dashboard;