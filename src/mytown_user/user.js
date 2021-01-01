import React from 'react';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    //Link
} from "react-router-dom";

import { Sidebar, NavBar, Footer } from './modules/components';

//---------------------------------------------
import './etc/lib/fontawesome/css/all.min.css';
import './etc/ui_lib/adminlte.css';
import './etc/js_lib/adminlte';
import './etc/js_lib/bootstrap.bundle';
import './etc/ui_lib/index.css';
//---------------------------------------------

import { Dashboard } from './modules/Dashboard';
import { BusinessUserRegistration,CustomerRegistration,CustomerReview,ManageBookings,EditAccountDetails,ViewMyAccountForm,UserBookings,MyReviews,PremiumMembershipForm  } from './modules/forms/BasicForms'; 

import $ from 'jquery'
window.jQuery = $;
window.$ = $;

export default function MyTowmUser() {
    let { path } = useRouteMatch();
    return (<>
        <NavBar />
        <Sidebar />
        <div className="content-wrapper">
            <Switch>
                <Route exact path={path}>
                {localStorage.getItem("user-login") === 'true' ? <Dashboard />: <Login />}
                </Route>
                <Route path={`${path}/dashboard`} exact>
                    <Dashboard />
                </Route>
                <Route path={`${path}/basic/BusinesssUserRegistration`} exact>
                    <BusinessUserRegistration  />
                </Route>
                <Route path={`${path}/basic/BusinesssUserRegistration/PremiumMembershipForm`} exact>
                    <PremiumMembershipForm />
                </Route>
                <Route path={`${path}/basic/ManageBookings`} exact>
                    <ManageBookings />
                </Route>
                <Route path={`${path}/basic/myreviews`} exact>
                    <MyReviews />
                </Route>
                <Route path={`${path}/basic/ViewMyAccountForm`} exact>
                    <ViewMyAccountForm />
                </Route>
            </Switch>
        </div>

        <aside className="control-sidebar control-sidebar-dark">
            <div className="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>

            </div>
            <div>
                <ul className="nav" >
                    <li className="nav-item">
                        <NavLink to="/minfo/yasi" className="nav-link">
                            <i className="nav-icon fas fa-cogs"></i> API Transactions
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/minfo/start" className="nav-link">
                            <i className="nav-icon fas fa-cogs"></i> Example
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
        <Footer />
    </>)
}
class Login extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Business Partner Login</h3>
                                    </div>
                                    <form className="form-horizontal">
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label for="inputEmail3" className="col-sm-2 control-label">Email</label>

                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputPassword3" className="col-sm-2 control-label">Password</label>

                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" /> Remember me
                      </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-footer">
                                            <button onClick={(e) => {
                                                localStorage.setItem("user-login", "true");
                                                window.location.href = '/user';

                                            }} className="btn btn-info">Log in</button>
                                            <p>Not yet Registered ? <NavLink to="/user/register">SignUP</NavLink></p>
                                            <p><NavLink to="/admin">Admin Panel</NavLink></p>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
