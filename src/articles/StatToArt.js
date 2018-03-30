import React, { Component } from 'react';
import articles from './stat';
import {DemoCarousel} from '../demoCarousel';
import puppy from '../pic/24.jpg';

export class StatToArt extends Component {
 
  render() {
const {article, isOpen,onButtonClick}=this.props;
const myArticleBody =(
		<div className="container">
		<section>{article.text}</section>
		<h3> Photo</h3>
		<DemoCarousel imgsrc={puppy}/> {/*это чисто проверить, т.к. нужно придумать как заливать туда картинки , они ж разные должны быть,а импортить одно и то же-тупизм*/}
	</div> )

return (
	<div className="card mx-auto">
	
		<div className="card-header">
			<h3>{article.title}</h3>
		</div>

		<div className="card-body" >
		 <button type="button" className="btn btn-info btn-sm float-right" onClick={onButtonClick}>Minimize</button>
			 {(isOpen === article.id?  '' : myArticleBody)}
			 
		</div>
		<h6 className="card-subtitle ">creation date: {(new Date(article.date)).toDateString()}</h6>
	</div>

)	
    
    
    
  }
}

export default StatToArt;
