import auth0 from 'auth0-js';
import history from './history';

export default class Auth {
	userProfile;
	
	requestedScopes = 'openid profile write:posts read:posts';	
    auth0 = new auth0.WebAuth({
    domain: 'maxmyd.auth0.com',
    clientID: 'F92Ql33DSWRRsFuqzjRPmoaKh7x90x1v',
    redirectUri: 'http://localhost:3000/',
    audience: 'http://r-blog.ua.ua',
    responseType: 'token id_token',
    scope: this.requestedScopes
  });
constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
	this.userHasScopes = this.userHasScopes.bind(this);
	this.getAccessToken = this.getAccessToken.bind(this);
	this.getProfile = this.getProfile.bind(this);
  }
  
  login() {
    this.auth0.authorize();
  }
  

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
	   const scopes = authResult.scope || this.requestedScopes || '';
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
		localStorage.setItem('scopes', JSON.stringify(scopes));
    // navigate to the home route
    history.replace('/');
  }
  
	getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }
  
	getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }
  
	
  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
		localStorage.removeItem('scopes');
		this.userProfile = null;
    // navigate to the home route
    history.replace('/');
  }
  userHasScopes(scopes) {
  const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
  return scopes.every(scope => grantedScopes.includes(scope));
	}
  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
