import React, { Component } from 'react';
import Posts from '../../articles/Posts';
import NavBar from '../navBar';

export class MainPage extends Component {

  render() {
    const{isAuthenticated} = this.props.auth;
  	return (
    	<div>
    		<NavBar />
    		<h1 className = "text-center">Stories</h1>
      	{isAuthenticated()&& (
      		<div>
      			<Posts auth={this.props.auth}/>
      		</div>
      		)}

      	{!isAuthenticated()&&(
      	<h4 className="text-center">You are not logged in! Please Log In to continue.</h4>
      	  )}
      </div>
    )
  }
}
export default MainPage;
