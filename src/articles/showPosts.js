import React, { Component } from 'react';
import ConstructorPosts from './constructorPosts';

export class ShowPosts extends Component {
constructor(props){
	super(props);
	this.state={
		loadMore:false,
	}
}

loadMore=()=>{
	this.setState({loadMore:true})
}
render() {
	const {articles}=this.props;

	return (
	    <div>
		 {/*Отображаем только 3 последние топика(1й раскрыт),если их более 3х ----подгружаем через button "Load more" все остальное*/}
							{  articles.length<4 ?
								(articles.slice(0).reverse().map((article)=>{
								return(
									<div key={article.id} >
										<ConstructorPosts isOpened={articles[articles.length-1].id} articleSkeleton={article} auth={this.props.auth}/>
									</div>
								)
								}))
								:(this.state.loadMore===false ?
								(<div>
									{articles.slice((articles.length-4),articles.length).reverse().map((article)=>{
									return(
										<div key={article.id} >
											<ConstructorPosts isOpened={articles[articles.length-1].id} articleSkeleton={article} auth={this.props.auth}/>
										</div>
										)
									})}
									<div className="container">
										<button className="btn btn-lg btn-block btn-secondary" onClick={this.loadMore}>Load more posts...</button>
									</div>
								 </div>)
								:	(articles.slice(0).reverse().map((article)=>{
									return(
										<div key={article.id}>
											<ConstructorPosts isOpened={articles[articles.length-1].id} articleSkeleton={article} auth={this.props.auth}/>
										</div>
									)
							})))
							}
		</div>
    );
  }
}

export default ShowPosts;
