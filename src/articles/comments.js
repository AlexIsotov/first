import React, { Component } from 'react';
import firebase from './firebase.js';
import CommentsConstructor from './commentsConstructor';

export class Comments extends Component {
  constructor(props){
		super(props);
		
		this.state={
			comment:'',
			comments:[],
			commentDate:'',
			showCommentBody:false,
			btnIcon:'▼',
			}
	}
	handleCommentChange(e){
		e.preventDefault();
		let commentDate=new Date().toLocaleString();
		let val=e.target.value;
		if(val.length<1000){
		this.setState({
			[e.target.name]:val,
			commentDate:commentDate,
		});}
		else {alert('Chill! You have only 1000 characters for comment! Enjoy!')}
		
	}
	handleCommentSubmit(itemId, e){
		e.preventDefault();
		
		const itemCommentRef=firebase.database().ref('articles/'+(itemId)+'/comment');
		const comments={
			comment:this.state.comment,
			commentDate:this.state.commentDate,
			nickname:this.state.profile.nickname,
			avatar:this.state.profile.picture,
			sub:this.state.profile.sub,
			
		};
		itemCommentRef.push(comments);
		this.setState({
			comment:'',
			commentDate:'',
		})
		
	}
	
	showCommentBody=()=> {
		this.setState ({showCommentBody: (this.state.showCommentBody===false)? true: false, btnIcon:(this.state.btnIcon==='▲')? '▼': '▲'})
	}
	
	componentWillMount() {
		this.setState({ profile: {} });
		const { userProfile, getProfile } = this.props.auth;
		if (!userProfile) {
		  getProfile((err, profile) => {
			this.setState({ profile });
		  });
		} else {
		  this.setState({ profile: userProfile });
		}
	  }
	
	componentDidMount(){
	const itemCommentRef=firebase.database().ref('articles/'+(this.props.article.id)+'/comment');
	itemCommentRef.on('value', (snapshot)=>{
		let items = snapshot.val();
		let newState= [];
		for (let item in items) {
			newState.push({
				id: item,
				comment: items[item].comment,
				commentDate: items[item].commentDate,
				nickname: items[item].nickname,
				avatar: items[item].avatar,
				sub: items[item].sub,
				editDate:items[item].editDate
			});
			
		}
		this.setState({
			comments:newState,
			
		})
	})
	
	}
	cli=()=>{
		let a=document.getElementById('Comment');
		this.setState({comment:a.value}, ()=>{console.log(this.state.comment)});
		console.log(a.value);
		
	}
render() {
	const { profile } = this.state;
	const {article}=this.props;
	const comments=	<div>
									{	this.state.comments.length>0 ?(
										this.state.comments.map((commenti)=>{
												return(
												<div key={commenti.id}>
													<CommentsConstructor article={article} comment={commenti} profile={this.state.profile} />
												</div>
												)
									})):
									<p className="text-muted text-center"><em>No comments yet. Be the first!</em></p>}
					</div>
	
	const commentBody = <div>   
								{comments}
								<form onSubmit={(e)=>this.handleCommentSubmit(article.id, e)}>
									<textarea id="Comment" className="form-control form-control-lg mb-1 mt-2" type="text" 
									placeholder="New comment" name="comment" onChange={(e)=>this.handleCommentChange(e)}  value={this.state.comment} 
									maxLength={1001} rows={6} required/>
									<div className="d-flex justify-content-between">
										<div className="d-flex justify-content-start ml-2">
											
												<img  height={50} width={50} src={profile.picture} alt="profile" className="rounded-circle"/>
											
											<p className="ml-1">	
												<strong>{profile.nickname} </strong><br/>
												<small className="text-muted"> ({profile.name})</small>
											</p>	
										</div>
										<div className="">
											<button className="btn btn-outline-dark btn-sm mr-1">Add Comment</button>
										</div>
									</div>
								</form>
								<button onClick={this.cli}>on</button>
						</div>

	return (
				<div className="bg-light">
								<div className=" d-flex justify-content-between border-top rounded" style={{background:"Gray"}}>
									<h4 className="text-light ml-2" > Comments {article.comment? ('('+ this.state.comments.length +')') : '(0)'}</h4>
									<button data-toggle="tooltip" data-placement="bottom" title="Clik to show/hide comments" className="btn btn-light" onClick={this.showCommentBody}>{this.state.btnIcon}</button>
								</div>
								
								{(this.state.showCommentBody===true )? commentBody : ''}
							
				</div>
    );
  }
}

export default Comments;

