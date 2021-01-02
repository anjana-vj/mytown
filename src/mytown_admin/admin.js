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

import { PremiumAccounts, EditPremiumAccount } from './modules/forms/PremiumAccounts';
import { Dashboard } from './modules/Dashboard';
import { Reviews } from './modules/Reviews';

import { CategoriesModule, CitiesModule, AddBusinessDataForm, AllBusinessList, EditBusinessDataForm } from './modules/BusinessData'

import $ from 'jquery'
window.jQuery = $;
window.$ = $;

export default function MyTowmAdmin() {
    let { path } = useRouteMatch();
    return (<>
        <NavBar />
        <Sidebar />
        <div className="content-wrapper">
            <Switch>
                <Route exact path={path}>
                    {localStorage.getItem("admin-login") === 'true' ? <Dashboard /> : <Login />}

                </Route>

                <Route path={`${path}/dashboard`} >
                    <Dashboard />
                </Route>
                <Route path={`${path}/reviews/all`} exact>
                    <Reviews />
                </Route>
                <Route path={`${path}/business/all`} exact>
                    <AllBusinessList />
                </Route>
                <Route path={`${path}/business/add`} exact>
                    <AddBusinessDataForm />
                </Route>
                <Route path={`${path}/business/edit/:id`} exact component={EditBusinessDataForm} />
                <Route path={`${path}/business/categories`} exact>
                    <CategoriesModule />
                </Route>
                <Route path={`${path}/business/cities`} exact>
                    <CitiesModule />
                </Route>
                <Route path={`${path}/business/premium`} exact>
                    <PremiumAccounts />
                </Route>
                <Route path={`${path}/business/premium/edit/:id`} exact component={EditPremiumAccount} />
            </Switch>
        </div>
        <Footer />
    </>)
}


class Login extends React.Component {
    constructor() {
        super();
        this.state = {}
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
                                        <h3 className="box-title">Admin Login</h3>
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
                                                localStorage.setItem("admin-login", "true");
                                                window.location.href = '/admin';

                                            }} className="btn btn-info">Log in</button>
                                            <NavLink className="btn btn-danger pull-right" to="/user">Business Login</NavLink>

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
