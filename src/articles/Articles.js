import React, { Component } from 'react';
import articles from './stat';
import {StatToArt} from './StatToArt';

export class Articles extends Component {
  	
render() {

		const articleElements =articles.map((article)=>
	<li key={article.id}  style={{listStyle:'none'}} >
		<StatToArt article={article}
		
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