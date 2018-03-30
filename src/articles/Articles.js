import React, { Component } from 'react';
import articles from './stat';

import {StatToArt} from './StatToArt';

export class Articles extends Component {
  	
constructor (props){
	  super(props);
	  
	  this.state= {
		  minimized: false,
		  openArticle:null    //'00001'
	  }
	
	{/*this.minimizeClick=this.minimizeClick.bind(this);*/}
  }
  
			minimizeClick=(openArticle) => { 											
			
			{/* button chek state used to minimize posts. state minimized оставил на будующее, работает по айдишнику пока так:) */}
				this.setState({minimized: this.state.minimized === false ? true : false});
				this.setState({openArticle: openArticle});
				} 
render() {

		const articleElements =articles.map((article)=>
	<li key={article.id}  style={{listStyle:'none'}} >
		<StatToArt article={article}
		isOpen= {this.state.openArticle}	 
		onButtonClick = {this.minimizeClick.bind(this, article.id)}
		/>
	</li>
)	
return (
	
    <div>
		<ul > {articleElements}</ul>
	</div>
    );
  }
}

export default Articles;
{/*isOpen = {this.state.openArticle === article.id}*/}
{/*, article.id)}
			this.setState({openArticle: this.state.openArticle === openArticle ? null : openArticle});*/}