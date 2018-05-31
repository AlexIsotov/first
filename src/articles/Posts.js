import React, { Component } from 'react';
import firebase from './firebase.js';

export class Posts extends Component {
  constructor(props){
		super(props);
		this.state={
			story:'',
			title:'',
			articles:[]
		}
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		const articlesRef= firebase.database().ref('articles');
		const article= {
			story: this.state.story,
			title:this.state.title
		}
		articlesRef.push(article);
		this.setState({
			story:'',
			title:''
		})
	}
	
	componentDidMount(){
	const articlesRef=firebase.database().ref('articles');
	articlesRef.on('value', (snapshot)=>{
		let items = snapshot.val();
		let newState= [];
		for (let item in items) {
			newState.push({
				id: item,
				story: items[item].story,
				title: items[item].title
			});
			
		}
		this.setState({
			articles:newState
		})
	})
}
	
	removeItem(itemId){
		const itemRef=firebase.database().ref('articles/'+(itemId));
		
		itemRef.remove();
	}	
render() {

	
	
return (
	
    <div>
	 
       <div className="container">
			<section>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Topic:</label>
						<input  id="inputTopic" className="form-control" type="text" placeholder="Title" name="title" onChange={this.handleChange} value={this.state.title}/>
					</div>
					<div className="form-group">
						<label>Story:</label>
						<textarea id="inputStory" className="form-control form-control-lg" type="text" placeholder="New story" name="story" onChange={this.handleChange} value={this.state.story}/>
					</div>
					<div className="d-flex justify-content-end">
					<button className="btn btn-secondary btn-lg"> Post</button>
					</div>
				</form>
			</section>
			<section>
				<div>
					<ul>
					{
						this.state.articles.map((article)=>{
							return(
							<li key={article.id}>
							<h3>{article.title}</h3>
							<p>{article.story}</p>
							<button onClick={()=>this.removeItem(article.id)}>Remove</button>
							</li>
							)
					})}
					</ul>
				</div>
			</section>
	   </div>	
	</div>
    );
  }
}

export default Posts;
