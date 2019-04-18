import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export class DemoCarousel extends Component {
	render() {
		const {imgsrc} = this.props;
    return (
					<div className="d-flex justify-content-center">
			      <Carousel  showThumbs={false} autoPlay={false} emulateTouch={true} transitionTime={500} interval={5000} infiniteLoop={true} dynamicHeight={true} >
							{imgsrc.map((images, i)=>{
										return(<img src={images}  onClick={this.toggleModal} alt='Slides' key={i} />)
								})
							}
						</Carousel>
					</div>
		);
    }
};
export default DemoCarousel;
