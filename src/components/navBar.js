import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/styleNavBar.css';
export class NavBar extends Component {
  
  render() {


    return (
	
	
		<nav className="startNavbar">
		<Link to="/home"> Home</Link>
		<Link to="/pic"> Pictures</Link>
		<Link to="/about"> About</Link>
		<Link to="/links"> Links</Link>

	
		</nav>
	
	
		);
  }
}
export default NavBar;
