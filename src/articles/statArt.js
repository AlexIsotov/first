import React, { Component } from 'react';
import articles from './stat';
import {DemoCarousel} from '../demoCarousel';

export class StatArt extends Component {
  render() {

const articleElements =articles.map((article)=>
<li key={article.id}  style={{listStyle:'none'}} >
	<div className="card mx-auto">
		
		<div className="card-header">
			<h3>{article.title}</h3>
		</div>
//testAgain
		<div className="card-body">
			<section>{article.text}</section>
		</div>
		
		<div className="container">
			<h3> Photo</h3>
			<DemoCarousel/>
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