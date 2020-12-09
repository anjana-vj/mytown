import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import MyAppHome from './mytown/MyApp';
import MyTowmAdmin from './mytown_admin/admin';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <MyAppHome />
        </Route>
        <Route path="/admin">
          <MyTowmAdmin/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('anjana_pjt')
);
