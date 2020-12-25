import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from './../../etc/ui_lib/logo.png';
export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="main-header navbar navbar-expand navbar-success navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="btn btn-link nav-link" data-widget="pushmenu" href="##"><i className="fas fa-bars"></i></button>
                </li>
            </ul>
            {localStorage.getItem("admin-login") === 'true' ? <>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <button className="btn btn-link nav-link" data-toggle="dropdown">
                        <i className="far fa-comments"></i>
                        <span className="badge badge-danger navbar-badge">3</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <a href="##" className="dropdown-item">
                            <div className="media">
                                <img src={logo} alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                      
                <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                    </h3>
                                    <p className="text-sm"></p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i></p>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="##" className="dropdown-item">

                            <div className="media">
                                <img src={logo} alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                       
                <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                    </h3>
                                    <p className="text-sm"></p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> </p>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="##" className="dropdown-item">
                            <div className="media">
                                <img src={logo} alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                      
                <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                    </h3>
                                    <p className="text-sm"></p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> </p>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="##" className="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <button className="btn btn-link nav-link" data-toggle="dropdown">
                        <i className="far fa-bell"></i>
                        <span className="badge badge-warning navbar-badge">15</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-header">15 Notifications</span>
                        <div className="dropdown-divider"></div>
                        <a href="##" className="dropdown-item">
                            <i className="fas fa-envelope mr-2"></i> 4 new messages
          <span className="float-right text-muted text-sm">3 mins</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="##" className="dropdown-item">
                            <i className="fas fa-users mr-2"></i> 8 friend requests
          <span className="float-right text-muted text-sm">12 hours</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="##" className="dropdown-item">
                            <i className="fas fa-file mr-2"></i> 3 new reports
          <span className="float-right text-muted text-sm">2 days</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="##" className="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                </li>
                <li className="nav-item">
                    <button className="btn btn-link nav-link" data-widget="control-sidebar" data-slide="true"><i
                        className="fas fa-cog"></i></button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={() => {
                       localStorage.removeItem("admin-login");
                       window.location.href = '/admin/';
                    }}><i
                        className="fas fa-power-off "></i></button>
                </li>
            </ul>
            </> : null}
        </nav>
        )
    }
}