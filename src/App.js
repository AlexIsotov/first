import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

export class App extends Component {
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
		<div className="fixed-top">
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin btn-sm"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin btn-sm"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </div>
	);
  }
}

export default App;
