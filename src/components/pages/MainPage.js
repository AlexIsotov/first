import React, { Component } from 'react';
import {Articles} from '../../articles/Articles';
import Posts from '../../articles/Posts';

export class MainPage extends Component {
 
  render() {
const{isAuthenticated} = this.props.auth;
    
	return (
	<div>
		
		<h1 className = "text-center">Stories</h1>
	
	{isAuthenticated()&&(
		<div>
			<Posts />
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