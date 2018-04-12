import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Footer} from './Footer.js';
import {NavBar} from './navBar.js';
import {InputAboutPage} from './InputAboutPage.js';

export class AboutPage extends Component {
  constructor(props){
	  super(props);
	  this.state={
		  name:""
	  }
	  
  }
  onChange = e=>{
	  let val=e.target.value;
	  this.setState({name:val});
  }
  render() {
 
    return (
<div>
		<h1 className="jumbotron display-1 text-center m-0"> About page</h1>
		<NavBar />
		<InputAboutPage />
		<h2 className="alert alert-success text-center"> Created by Richard the Dog aka Gangsta dog</h2>
		<Footer />
</div>
)
  }
}
export default AboutPage;