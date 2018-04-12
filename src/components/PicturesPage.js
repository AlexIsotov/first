import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {DemoCarousel} from '../demoCarousel';
import {Footer} from './Footer.js';
import {NavBar} from './navBar.js';
import puppy from '../pic/24.jpg';
import './styles/styleNavBar.css';
import Auth from './Auth.js';
import App from '../App.js';
const auth = new Auth();

export class PicturesPage extends Component {
    login() {
	this.props.auth.login();
	}
  render() {
 const{isAuthenticated} = this.props.auth;
    return (
<div >
	<div >
		<div className="jumbotron m-0 ">
			<App  auth={auth}/>
				<h1 className="display-1 text-center"> Watch this funny photos
				</h1>
		</div>	
		<NavBar />
	</div>

{isAuthenticated()&&(
	<div className="container" >
			<DemoCarousel imgsrc={puppy}/>
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
export default PicturesPage;