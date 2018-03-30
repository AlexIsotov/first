import React, { Component } from 'react';
import articles from './stat';
import {DemoCarousel} from '../demoCarousel';
import puppy from '../pic/24.jpg';

export class StatArt extends Component {
  constructor (props){
	  super(props);
	  
	  this.state= {
		  minimized: false,
		  openArticle:null
	  }
	
	this.minimizeClick=this.minimizeClick.bind(this);
  }
  
			minimizeClick=() => { 											
					{/* button chek state used to minimize posts. Сама кнопка рагульная */}
				
				this.setState({minimized:this.state.minimized===false? true: false});
				
			}	
  
  render() {

const articleElements =articles.map((article)=>
<li key={article.id}  style={{listStyle:'none'}} >
	
	<div className="card mx-auto">
		<div className="card-header">
			<h3>{article.title}</h3>
		</div>

		<div className="card-body" >
		 <button type="button" class="btn btn-info btn-sm float-right" onClick={this.minimizeClick}>Minimize</button>
			{this.state.minimized===false ? (<section>{article.text}</section>,
			<div className="container">,
				<h3> Photo</h3>,
				<DemoCarousel imgsrc={puppy}/> {/*это чисто проверить, т.к. нужно придумать как заливать туда картинки , они ж разные должны быть,а импортить одно и то же-тупизм*/}
			</div>
			) :''}
		</div>
		<h6 className="card-subtitle ">creation date: {(new Date(article.date)).toDateString()}</h6>
	</div>
</li>
)	
    return (
    <div>
	<ul  > {articleElements}</ul>
	</div>
    );
  }
}

export default StatArt;
