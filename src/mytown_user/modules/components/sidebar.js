import React from 'react';
import { NavLink } from "react-router-dom";
export default class Sidebar extends React.Component {
    render() {
        return (
            <aside className="main-sidebar sidebar-dark-success elevation-4">
                <div href="#index3.html" className="brand-link text-center">

                    <span className="brand-text text-bold text-center text-green">MyTown </span>
                    <span className="brand-text text-bold text-center">MemberArea </span>
                </div>
                {localStorage.getItem("user-login") === 'true' ? <>
                    <div className="hidden-scroll sidebar">
                        <nav className="mt-3">
                            <ul className="nav nav-pills nav-sidebar flex-column nav-compact" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <NavLink exact to="/user/dashboard" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>Dashboard</p>
                                    </NavLink>
                                </li>
                                <li className="nav-header mt-0 pt-0 text-green">Data Management</li>
                                <li className="nav-item">
                                    <NavLink to="/user/customers" className="nav-link">
                                        <i className="nav-icon fas fa-home"></i>
                                        <p>customers</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </> :
                    <>
                        <div className="hidden-scroll sidebar">
                            <nav className="mt-3">
                                <ul className="nav nav-pills nav-sidebar flex-column nav-compact" data-widget="treeview" role="menu" data-accordion="false">
                                    <li className="nav-item">
                                        <NavLink to="/user/" className="nav-link">
                                            <i className="nav-icon fas fa-key"></i>
                                            <p>Login</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </>}
            </aside>
        )
    }
}