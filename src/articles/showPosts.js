import React, { Component } from 'react';
import ConstructorPosts from './constructorPosts';

export class ShowPosts extends Component {

render() {

const {articles}=this.props;	
	
return (
	
    <div>
	 
					
					{  
						articles.slice(0).reverse().map((article)=>{
							return(
							<div key={article.id} >
								
								<ConstructorPosts isOpened={articles[articles.length-1].id} articleSkeleton={article} auth={this.props.auth}/>
							</div>
							)
					})}
					
			
	</div>
    );
  }
}

export default ShowPosts;
