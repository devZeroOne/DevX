import React from 'react';
import Logo from '../../common/logo/Logo';
import './mainDashbaord.css'
const MainDeshboard = () => {




    return (
        <div className="dashboard">
            <nav className="dashboardNav">
                <Logo design={{fontSize:"45px"}} />
            </nav>
            <div className="dashboardBody">
                <aside>
                  <ul>
                    <li>Dashboard</li>
                    <li>Add New Page</li>
                    <li>Manage Blog</li>
                    <li>Add New Admin</li>
                    <li>Logout</li>
                  </ul>
                </aside>
                <main className="bodyContent">

                    <h1>Welcome to DevX Admin</h1>



                </main>
            </div>



        </div>
    );
};

export default MainDeshboard;