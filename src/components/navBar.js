import React, { Component } from 'react';
import {NavLink, Router} from 'react-router-dom';
import {Navbar} from 'reactstrap';

export class NavBar extends Component {
  
  render() {


    return (
	
	
		<Navbar >
		<NavLink to="/home"> Home</NavLink>
		<NavLink to="/pic"> Pictures</NavLink>
		<NavLink to="/about"> About</NavLink>
		<NavLink to="/links"> Links</NavLink>
		</Navbar>
	
	
		);
  }
}
export default NavBar;
