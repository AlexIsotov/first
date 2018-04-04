import React, { Component } from 'react';
import {MainPage} from './components/MainPage.js';
import {AboutPage} from './components/AboutPage.js';
import {NotFoundPage} from './components/NotFoundPage.js';
import {PicturesPage} from './components/PicturesPage.js';
import {Router, Route, Switch} from 'react-router-dom';
import Callback from './components/Callback';
import Auth from './components/Auth.js';
import App from './App';
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
        <Route exact path="/" render={(props) => <MainPage auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <MainPage auth={auth} {...props} />} />
		<Route path="/about" render={(props) => <AboutPage  />} />
		<Route path="/pic" render={(props) => <PicturesPage auth={auth} {...props} />} />
       
		<Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
      </Switch>
    </Router>
  );
}}

