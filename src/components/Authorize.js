import React, { Component } from 'react';

export class Authorize extends Component {
goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
	const { isAuthenticated } = this.props.auth;


    return (
		      <div >
            {
              !isAuthenticated() && (
                  <button className="btn btn-outline-primary mr-2" onClick={this.login.bind(this)} >
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button className="btn btn-outline-primary mr-2" onClick={this.logout.bind(this)}>
                    Log Out
                  </button>
                )
            }
          </div>
	);
  }
}

export default Authorize;
