import React, { Component } from 'react';
import {NavBar} from './navBar';
import {Articles} from '../articles/Articles';
import 'bootstrap/dist/css/bootstrap.css';

export class MainPage extends Component {
  render() {
 
    return (
<div>
		<h1 className = "display-1 jumbotron jumbotron-fluid text-center"> Richard's blog </h1>
		<NavBar />
		<Articles className="rounded" />
</div>
)
  }
}
export default MainPage;