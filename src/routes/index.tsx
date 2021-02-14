import React from 'react';
import { Switch } from 'react-router-dom';
import { ToDoList, ToDoListItem } from '../pages/ToDoList';
import Route from './route';
import SignIn from '../pages/SignIn';
import Page from '../components/ui/Page';
/*
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import People from '../pages/People';
import Profile from '../pages/Profile';

import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import CheckIn from '../pages/CheckIn';
import HomeServices from '../pages/HomeServices';
import ProfessionalServices from '../pages/ProfessionalServices';
import Reports from '../pages/Reports';
import PeopleUpdate from '../pages/PeopleUpdate';
import Notifications from '../pages/Notifications';
import CheckOut from '../pages/CheckOut'; */

const NotFound = () => {
  return <Page title="The Page is not found" />;
};

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/todolist" exact component={ToDoList} />
    <Route path="/todolist/:id" component={ToDoListItem} />
    <Route path="/signin" component={SignIn} />
    {/* <Route path="/reports" component={Reports} isPrivate /> */}
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
