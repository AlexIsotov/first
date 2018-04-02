import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Footer} from './Footer.js';
import {NavBar} from './navBar.js';

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
		<h1 className="jumbotron display-1 text-center"> About page</h1>
		<NavBar />
		<p>Please enter your name</p>
		<input type="text" value={this.state.name} onChange={this.onChange} />
		<p> {this.state.name} is a good boy ! </p>
		<h2 className="alert alert-success text-center"> Created by Richard the Dog aka Gangsta doog</h2>
		<Footer />
</div>
)
  }
}
export default AboutPage;