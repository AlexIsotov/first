import React, { Component } from 'react';
import firebase from './firebase.js';
import thumbUp from './pics/thumbsup.png';

let likerId=null;
export class Likes extends Component {
  constructor(props){
		super(props);
		
		this.state={
			likers:[],
			profile:{},
			}
	}
	
	likeThis=()=>{
		
	const itemLikersRef=firebase.database().ref('articles/'+(this.props.article.id)+'/likers/');
	
	const likers={
			liked:this.state.profile.nickname,
			};
			
		itemLikersRef.push(likers);
	}
	
	dislikeThis(itemId){
		if(this.props.article.likers) {
	const itemLikersRef=firebase.database().ref('articles/'+(this.props.article.id)+'/likers/'+(itemId));
	itemLikersRef.remove();
	}
	}
	componentDidMount(){
		
	const { userProfile, getProfile } = this.props.auth;
	
		if (!userProfile) {
		  getProfile((err, profile) => {
			this.setState({ profile });
		  });
		} else {
		  this.setState({ profile: userProfile });
		}
			
	const itemLikersRef=firebase.database().ref('articles/'+(this.props.article.id)+'/likers/');
	itemLikersRef.on('value', (snapshot)=>{
		let items = snapshot.val();
		let newState= [];
		for (let item in items) {
			newState.push({
				id: item,
				liked: items[item].liked,
				
			});
			
		}
		this.setState({
			likers:newState
		})
	})
	
	}
		
	findId=(liker)=>{
		if(liker.liked===this.state.profile.nickname)
		{ likerId=liker.id}
	}
	
render() {

	return (
			<div className="flex-shrink-1">
			
				
				<div>
				
					{this.props.article.likers ?
						this.state.likers.some((liker)=>{return ((liker.liked===this.state.profile.nickname) )}) ?
							(<div className="d-flex justify-content-end">
								{this.state.likers.forEach(this.findId)}
								<label className="text-muted mr-1">	
									<small><strong>You</strong>{this.state.likers.length>1 ? ' and '+ (this.state.likers.length-1)+' more ' : ''}  like it</small>
								</label>
								<button data-toggle="tooltip" data-placement="bottom" title="Dislike" className="btn btn-primary btn-sm mr-1 my-2" onClick={()=>this.dislikeThis(likerId)}> <img height={24} width={24} src={thumbUp} alt='dislike' /></button>
							</div>	)
							 :
							 (<div  className="d-flex justify-content-end">
								<label className="text-muted mr-1">	
									<small>{this.state.likers.length>0 ? (this.state.likers.length)  : ''}  like(s)</small>
								</label>
								<button data-toggle="tooltip" data-placement="bottom" title="Like!" className="btn btn-outline-primary btn-sm mr-1 my-2" onClick={this.likeThis}><img height={24} width={24} src={thumbUp} alt='like' /></button>
							 </div>)
					:
						<div className="d-flex justify-content-end">
							<label className="text-muted mr-1">	
								<small> <strong>Nobody</strong> likes it :(</small>
							</label>
							<button data-toggle="tooltip" data-placement="bottom" title="Like!" className="btn btn-outline-primary btn-sm mr-1 my-2" onClick={this.likeThis}><img height={24} width={24} src={thumbUp} alt='like' /></button>
						</div>}
							
			</div>
				
				
				
			</div>
    );
  }
}

export default Likes;

