import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {DemoCarousel} from '../demoCarousel';
import {Footer} from './Footer.js';
import {NavBar} from './navBar.js';
import puppy from '../pic/24.jpg';
import './styles/styleNavBar.css';

export class PicturesPage extends Component {
  render() {
 
    return (
<div >
	<div className="jumbotron  ">
		<h1 className="display-1 text-center"> Watch this funny photos
		</h1>
	</div>	
	<NavBar />
	<div className="container" >
			<DemoCarousel imgsrc={puppy}/>
	</div>
	<Footer />
</div>
)
  }
}
export default PicturesPage;