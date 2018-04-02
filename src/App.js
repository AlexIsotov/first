import React, { Component } from 'react';
import {MainPage} from './components/MainPage.js';
import {AboutPage} from './components/AboutPage.js';
import {NotFoundPage} from './components/NotFoundPage.js';
import {PicturesPage} from './components/PicturesPage.js';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {

    return (
	
    <div >
		<BrowserRouter>
		<Switch>
		<Route exact path="/" component={MainPage} />
		<Route path= "/about" component={AboutPage} />
		<Route path= "/pic" component={PicturesPage} />
		<Route component={NotFoundPage} />
		</Switch>
		</BrowserRouter>
	</div>
    
	);
  }
}

export default App;
