import React, { Component } from 'react';
import axios from 'axios';
export class LoginPage extends Component {
  constructor(props){
	super(props)
	this.state={
		email:'',
		password:''
	}	
  }
  
  handleEmailChange= e =>{
	  this.setState({email:e.target.value});
  }
  
  handlePasswordChange= e =>{
	  this.setState({password:e.target.value});
  }
  signIn=()=>{
	  alert('Email: '+this.state.email+' Password: '+this.state.password);
		axios.post('signin',{
			email:this.state.email,
			password:this.state.password
		}
		)
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error){
			console.log(error);
		})
  }
  render() {
 
    return (
	<div>
		<form className="form-signin">
			<h2 className="form-signin-heading"> Welcome! Please sign in </h2>
			<label htmlFor="inputEmail" className="sr-only">Email adress</label>
			<input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
			<label htmlFor="inputPassword" className="sr-only">Password</label>
			<input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
			<button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
		</form>
	</div>
)
  }
}
export default LoginPage;