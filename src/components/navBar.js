import React, { Component } from 'react';
import {Nav, NavLink} from 'reactstrap';

import Auth from './Auth.js';
import Authorize from './Authorize';
const auth = new Auth();

export class NavBar extends Component {
  
  render() {
    return (
		<Nav tabs className= "d-flex bg-light">
			<NavLink href="/home"> Home</NavLink>
			<NavLink href="/pic"> Pictures</NavLink>
			<NavLink href="/about"> About</NavLink>
			
			<div className="ml-auto">
				<Authorize  auth={auth}/>
			</div>
		</Nav>
	
	
		);
  }
}
export default NavBar;
