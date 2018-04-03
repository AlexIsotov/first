import React, { Component } from 'react';

export class LoginPage extends Component {
  render() {
 
    return (
<div>
	<form className="form-signin">
		<h2 className="form-sighin-heading"> Welcome! Please sign in </h2>
		<label for="inputEmail" className="sr-only">Email adress</label>
		<input type="email" id="inputEmail" className="form-control" placeholder="Email" required autofocus />
		<label for="inputPassword" className="sr-only">Password</label>
		<input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
		<button className="btn btn-lg btn-primary btn-block" type="button">Sign in</button>
	</form>
</div>
)
  }
}
export default LoginPage;