import React, { Component } from 'react';
import {DemoCarousel} from '../../demoCarousel';
import puppy from '../../pic/24.jpg';
import NavBar from '../navBar';

export class PicturesPage extends Component {
   
  render() {
 
 const{isAuthenticated} = this.props.auth;
    
	return (
	<div >
		<NavBar />
		<h1 className="text-center"> Watch this funny photos</h1>
	
	{isAuthenticated()&&(
		<div className="container" >
				<DemoCarousel imgsrc={puppy}/>
		</div>
		)}
		
	{!isAuthenticated()&&(
	<h4 className="text-center">You are not logged in! Please Log In to continue.</h4>
	  )}
		
	</div>
)
  }
}
export default PicturesPage;