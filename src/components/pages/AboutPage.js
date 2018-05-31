import React, { Component } from 'react';
import InputAboutPage from '../InputAboutPage.js';

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
		<h1 className="text-center"> About page</h1>
		<InputAboutPage />
		<h2 className="alert alert-success text-center"> Created by Richard the Dog aka Gangsta dog</h2>
		
</div>
)
  }
}
export default AboutPage;