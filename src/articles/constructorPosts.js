import React, { Component } from 'react';
import firebase from './firebase.js';

export class ShowPosts extends Component {
  	constructor(props){
		super(props);
		this.state={
		minimized: 'true',
		style: 'whitesmoke',
		showBody: false,
		btnIcon: '▼',
		btnShow: false
		}
	}
	removeItem(itemId){
		const itemRef=firebase.database().ref('articles/'+(itemId));
		
		itemRef.remove();
	}
	
	mouseEntered=()=> {
		this.setState({style:'lightgrey', btnShow: true})
	}
	mouseLeft=()=> {
		this.setState({style:'whitesmoke', btnShow: false})
	}
	showArticleBody=()=>{
		this.setState ({showBody: (this.state.showBody===false)? true: false, btnIcon:(this.state.btnIcon==='▲')? '▼': '▲'})
	}
render() {
const{userHasScopes} = this.props.auth;	
const {articleSkeleton}=this.props;	
const articleBody=<div>
									<p>{articleSkeleton.story}</p>
									{userHasScopes(['write:posts'])&&(
									<div className="d-flex justify-content-end">
										<button className="btn btn-sm btn-outline-dark" onClick={()=>this.removeItem(articleSkeleton.id)}>Remove</button>
									</div>
									)}
					</div>
const btnHide=<button className="btn  btn-outline-secondary " onClick={this.showArticleBody}>{this.state.btnIcon}</button>
return (
	
    <div className="container mt-3">
	 
								<div className="d-flex justify-content-between" onMouseEnter={this.mouseEntered} onMouseLeave={this.mouseLeft} style={{backgroundColor:this.state.style}}>
									<h3>{articleSkeleton.title}</h3>
								{(this.state.btnShow===true)? btnHide : ''}	
								</div>
								{(this.state.showBody===true)? articleBody : ''}
				
	</div>
    );
  }
}

export default ShowPosts;
