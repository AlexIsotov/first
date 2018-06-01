import React, { Component } from 'react';
import ConstructorPosts from './constructorPosts';

export class ShowPosts extends Component {
  	
render() {

const {articles}=this.props;	
const{userHasScopes} = this.props.auth;		
return (
	
    <div>
	 
					<ul>
					{
						articles.slice(0).reverse().map((article)=>{
							return(
							<li key={article.id} style={{listStyle:'none'}}>
								<ConstructorPosts articleSkeleton={article} auth={this.props.auth}/>
							</li>
							)
					})}
					</ul>
			
	</div>
    );
  }
}

export default ShowPosts;
