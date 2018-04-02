import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {DemoCarousel} from '../demoCarousel';
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
	<div className="container" >
			<DemoCarousel imgsrc={puppy}/>
	</div>
</div>
)
  }
}
export default PicturesPage;