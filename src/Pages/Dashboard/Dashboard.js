import React from 'react';
import { Link as NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import useAdmin from './../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile px-5 lg:px-0 pt-3">
            <input id="dashboard-slider" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold text-purple-500 mb-5 pl-5'>Dashboard</h2>
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-slider" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    { 
                        !admin && <>
                            <li><NavLink to="/dashboard">My Orders</NavLink></li>
                            <li><NavLink to="/dashboard/review">Add a Reviews</NavLink></li>
                        </>
                    }
                    {
                        admin && <>
                            <li><NavLink to="/dashboard/users">All Users</NavLink></li>
                        </>
                    }
                    <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>
                    
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;