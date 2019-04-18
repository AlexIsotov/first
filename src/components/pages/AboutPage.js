import React, { Component } from 'react';
import NavBar from '../navBar';

export class AboutPage extends Component {

 componentWillMount() {
		this.setState({ profile: {} });
		const { userProfile, getProfile } = this.props.auth;
		if (!userProfile) {
		  getProfile((err, profile) => {
			this.setState({ profile });
		  });
		} else {
		  this.setState({ profile: userProfile });
		}
	  }
  render() {
     const {isAuthenticated} = this.props.auth;
     const { profile } = this.state;
     return (
      <div>
      		<NavBar />
      		<h1 className="text-center"> User info</h1>

      		{isAuthenticated()&& (
      		<div className="d-flex justify-content-start mt-2">
      			<div className="ml-2">
      		    <img className="rounded" src={this.state.profile.picture} alt="avatar" height={100} width={100}/>
      			</div>
      			<div>
      				<div className="d-flex justify-content-start ml-2">
      					<h3>Nickname: </h3>
      					<h3 className="ml-1"> {this.state.profile.nickname}</h3>
      				</div>
      				<div className="d-flex justify-content-start ml-2">
      					<h5>E-mail: </h5>
      					<h5 className="ml-1">{this.state.profile.name}</h5>
      				</div>
      				<div className="d-flex justify-content-start ml-2">
      					<p><strong>ID:</strong></p>
      					<p className="ml-1">{this.state.profile.sub}</p>
      				</div>
      			</div>
      		</div>
      		)}
      		{!isAuthenticated()&&(
      		<h4 className="text-center">You are not logged in! Please Log In to watch more info</h4>
      		  )}
      	  <h2 className="alert alert-success text-center mt-5"> Created by Richard the Dog aka Gangsta dog</h2>
      </div>
      )
  }
}
export default AboutPage;
