import React, { Component } from 'react';
import {Nav, NavLink} from 'reactstrap';
import Auth from './Auth.js';
import Authorize from './Authorize';
const auth = new Auth();

export class NavBar extends Component {

  render() {
    return (
		<Nav tabs className= "d-flex bg-light">
			<NavLink href="/" > Home</NavLink>
			<NavLink href="/about" > Info</NavLink>
			<div className="ml-auto">
				<Authorize  auth={auth}/>
			</div>
		</Nav>
		);
  }
}
export default NavBar;
