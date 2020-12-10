import React from 'react';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    //Link
} from "react-router-dom";

import { Sidebar, NavBar, Footer } from './modules/minfo/components';

//---------------------------------------------
import './etc/lib/fontawesome/css/all.min.css';
import './etc/ui_lib/adminlte.css';
import './etc/js_lib/adminlte';
import './etc/js_lib/bootstrap.bundle';
import './etc/ui_lib/index.css';
//---------------------------------------------

import { AddBusinessDataForm, AddCategoriesForm, AllBusiness } from './modules/forms/Businessforms';
import { PremiumAccounts, EditPremiumAccount } from './modules/forms/PremiumAccounts';
import { Dashboard } from './modules/minfo/Dashboard';
import { Reviews } from './modules/minfo/Reviews';


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
                    <Dashboard />
                </Route>
                <Route path={`${path}/reviews/all`} exact>
                    <Reviews />
                </Route>
                <Route path={`${path}/business/all`} exact>
                    <AllBusiness />
                </Route>
                <Route path={`${path}/business/add`} exact>
                    <AddBusinessDataForm />
                </Route>
                <Route path={`${path}/business/categories`} exact>
                    <AddCategoriesForm />
                </Route>
                <Route path={`${path}/business/premium`} exact>
                    <PremiumAccounts />
                </Route>
                <Route path={`${path}/business/premium/edit/:id`} exact component={EditPremiumAccount} />
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
