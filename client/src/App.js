import React from 'react';
import Landing from './pages/Landing';
import UserContextProvider from './contexts/UserContext';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "./assets/demo/demo.css";
import AdminLayout from './layouts/Admin.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/auth/login' component={Landing} />
          {/* <Route exact path='/dashboard' component={Admin} /> */}
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          {/* <Redirect to="/admin/dashboard" /> */}
        </Switch>
      </UserContextProvider>
    </BrowserRouter>
  )
}
