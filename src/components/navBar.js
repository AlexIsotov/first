import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export class NavBar extends Component {
  render() {
 

    return (
	<div>
		<nav className="navbar">
		

		 <div className="container-fluid">
      <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
		</nav>
	</div>
		);
  }
}
export default NavBar;
