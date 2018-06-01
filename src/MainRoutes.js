import React, { Component } from 'react';
import MainPage from './components/pages/MainPage';
import AboutPage from './components/pages/AboutPage.js';
import PicturesPage from './components/pages/PicturesPage.js';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

import Auth from './components/Auth.js';
import history from './components/history';
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export class MainRoutes extends Component {
  render(){
  return (
    <Router history={history} >
      <Switch>
        <Route exact path="/" render={(props) => {handleAuthentication(props); return <MainPage auth={auth} {...props} />}} />
		<Route exact path="/about" render={(props) => <AboutPage  />} />
		<Route exact path="/pic" render={(props) => <PicturesPage auth={auth} {...props} />} />
       
		<Route  path="*" render={(props) => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}}

export default MainRoutes;