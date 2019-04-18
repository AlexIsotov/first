import React, { Component } from 'react';
import MainRoutes from './MainRoutes';


export class App extends Component {

  render() {
    return (
  		 <div >
  			<div className="jumbotron m-0 ">
  				<h1 className="display-3 text-center "> Richards blog </h1>
  			</div>
  			<MainRoutes />
       </div>
	);
  }
}

export default App;
