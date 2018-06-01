import React, { Component } from 'react';
import firebase from './firebase.js';
import ShowPosts from './showPosts';

export class Posts extends Component {
  constructor(props){
		super(props);
		this.state={
			hidden:true,
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
	createPost=()=>{
		this.setState({hidden: this.state.hidden === false ? true : false});
	}
		
render() {
const{userHasScopes} = this.props.auth;	
const newPost=	 <div className="container">
			
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
					<button className="btn btn-dark btn-lg">Post</button>
					</div>
				</form>
		</div>	
return (
	
    <div> 
	{userHasScopes(['write:posts'])&&(
		<div className="d-flex justify-content-end">
			<button className="btn btn-dark mr-2" onClick={this.createPost}> New post</button>
		</div>
		)}
		
			{this.state.hidden?'': newPost}
	  		
		<div>
			<ShowPosts articles={this.state.articles} auth={this.props.auth}/>
		</div>
			
			
	   	
	</div>
    );
  }
}

export default Posts;

