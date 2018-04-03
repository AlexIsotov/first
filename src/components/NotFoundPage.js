import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export class NotFoundPage extends Component {
  render() {
 
    return (
<div>
		<h2 className=" text-center"> 404 Not found</h2>
		<div className=" text-center">
			<Link to="/">Go back</Link>
		</div>
</div>
)
  }
}
export default NotFoundPage;