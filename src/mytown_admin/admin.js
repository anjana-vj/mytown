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

import { AddBusinessDataForm, AddCategoriesForm } from './modules/forms/Businessforms';
import {PremiumAccounts} from './modules/forms/PremiumAccounts';
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
                    Dash
            </Route>
                <Route path={`${path}/reviews`} exact>
                    0
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
