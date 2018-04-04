import React, { Component } from 'react';
import {NavBar} from './navBar';
import{Footer} from './Footer.js';
import {Articles} from '../articles/Articles';
import 'bootstrap/dist/css/bootstrap.css';
import Auth from './Auth.js';
import App from '../App.js';
const auth = new Auth();

export class MainPage extends Component {
  login() {
	  this.props.auth.login();
  }
  render() {
const{isAuthenticated} = this.props.auth;
    
	return (
<div>
<div className="jumbotron">
	<App  auth={auth}/>
	<h1 className = "display-1 text-center"> Richard's blog
	</h1>
</div>
<NavBar />

{isAuthenticated()&&(
	<div>
		<Articles className="rounded" />
	</div>
	)}
{!isAuthenticated()&&(
<h4 className="text-center">You are not logged in! Please{' '}
	<a onClick={this.login.bind(this)} >
	Log In
	</a>
	{' '}to continue.
</h4>
  )}
<Footer />

</div>
)
  }
}
export default MainPage;