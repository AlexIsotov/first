import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import racoon from './pic/25.jpg';
import pig from './pic/26.jpg';
import pig1 from './pic/27.jpg';
import pig2 from './pic/28.jpg';

export class DemoCarousel extends Component {
    render() {
        return (
            <Carousel  autoPlay={true} interval={4750} emulateTouch={true} infiniteLoop={true}  >
                <div >
                    <img src={this.props.imgsrc} alt='firstSlide' style={{width:'75%'}}/>
                   
                </div>
               <div >
                    <img src={racoon} alt='secondSlide' style={{width:'75%'}}/>
                   
                </div>
                <div >
                    <img src={pig} alt='3Slide' style={{width:'75%'}}/>
                    
                </div>
				<div >
                    <img src={pig1} alt='4Slide' style={{width:'75%'}}/>
                    
                </div>
				<div >
                    <img src={pig2} alt='5Slide' style={{width:'75%'}}/>
						{/*  <p className="legend">End </p>*/}
                </div>
            </Carousel>
        );
    }
};
