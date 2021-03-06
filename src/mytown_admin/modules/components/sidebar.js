import React from 'react';
import { NavLink } from "react-router-dom";
export default class Sidebar extends React.Component {
    render() {
        return (
            <aside className="main-sidebar sidebar-dark-success elevation-4">
                <div href="#index3.html" className="brand-link text-center">

                    <span className="brand-text text-bold text-center text-green">MyTown </span>
                    <span className="brand-text text-bold text-center">Admin</span>
                </div>
                {localStorage.getItem("admin-login") === 'true' ? <>

                    <div className="hidden-scroll sidebar">
                        <nav className="mt-3">
                            <ul className="nav nav-pills nav-sidebar flex-column nav-compact" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <NavLink exact to="/admin/dashboard" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>Dashboard</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item has-treeview menu-open">
                                    <NavLink to="/admin/business/" className="nav-link">
                                        <i className="nav-icon fas fa-coins"></i>
                                        <p>
                                            Business Data <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </NavLink>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <NavLink to="/admin/business/all" exact className="nav-link">
                                                <i className="fas fa-landmark  nav-icon"></i>
                                                <p>All Business</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/admin/business/add" exact className="nav-link">
                                                <i className="fas fa-landmark  nav-icon"></i>
                                                <p>New Business</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/admin/business/categories" className="nav-link">
                                                <i className="fas fa-money-bill-alt nav-icon"></i>
                                                <p>Categories</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/admin/business/cities" className="nav-link">
                                                <i className="fas fa-money-bill-alt nav-icon"></i>
                                                <p>Cities</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/admin/business/premium" className="nav-link">
                                                <i className="fas fa-money-bill-alt nav-icon"></i>
                                                <p>premium accounts</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item has-treeview menu-open">
                                    <NavLink to="/admin/reviews/" className="nav-link">
                                        <i className="nav-icon fas fa-file"></i>
                                        <p>
                                            Reviews <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </NavLink>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <NavLink to="/admin/reviews/all" className="nav-link">
                                                <i className="fas fa-birthday-cake  nav-icon"></i>
                                                <p>All Reviews</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/admin/reviews/manage" className="nav-link">
                                                <i className="fas fa-certificate nav-icon"></i>
                                                <p>Manage Reviews</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-header mt-0 pt-0 text-green">Data Management</li>
                                <li className="nav-item">
                                    <NavLink to="/admin/customers" className="nav-link">
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
                                        <NavLink to="/admin/" className="nav-link">
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