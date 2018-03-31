import React, { Component } from 'react';
import {Articles} from './articles/Articles';
import 'bootstrap/dist/css/bootstrap.css';
import {DemoCarousel} from './demoCarousel';

class App extends Component {
  render() {
 

    return (
     <div >
	 
	<h1 className = "display-1 jumbotron jumbotron-fluid text-center"> Richard's blog </h1>
	
	<Articles className="rounded" />
	
	 </div>
    );
  }
}

export default App;
