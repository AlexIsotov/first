import React, { Component } from 'react';
import firebase from './firebase.js';
import trash from './pics/trash.png';
import Pencil from './pics/pencil.png';
import Quote from './pics/quote.png';
import Reply from './pics/reply64.png';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class CommentsConstructor extends Component {
  constructor(props){
		super(props);
		
		this.state={
			comment:'',
			modal:false,
			editDate:null,
			btnConfirm:true,
			}
	}
	handleCommentChange=(e)=>{
		e.preventDefault();
		let val=e.target.value;
		if(val.length<1000){
		this.setState({
			[e.target.name]:val,
			btnConfirm:false,
		});}
		else {alert('Chill! You have only 1000 characters for comment! Enjoy!')}
		
	}
	handleCommentSubmit(itemId, commentId, e){
		
		e.preventDefault();
		const itemCommentRef=firebase.database().ref('articles/'+(itemId)+'/comment/'+(commentId));
		
		const comments={
			comment:this.state.comment,
			editDate:this.state.editDate,
		};
		itemCommentRef.update(comments);
		this.setState({
			comment:'',
			editDate:'',
			modal: !this.state.modal
		})
		
	}
		
	del(itemId, commentId){
		const itemCommentRef=firebase.database().ref('articles/'+(itemId)+'/comment/'+(commentId));
		let confirmation=window.confirm('Are u sure want to delete this comment?');
		if (confirmation){
			const comments={
			comment:'This comment was deleted',
			commentDate:'',
			sub:'deleted!'
			};
		itemCommentRef.update(comments);}
	}
	
	toggleModal(a){
    let editDateComment=new Date().toLocaleString();
	this.setState({
      modal: !this.state.modal,
	  comment:(this.state.modal!==true)? a.comment : '',
	  btnConfirm: true,
	  editDate:editDateComment
	  });
	  
	}
	reply(e){
		const repComment=document.getElementById('Comment');
		repComment.focus();
		repComment.value=repComment.value+"\n @"+ e+"\n";
	
	}
	quote(e){
		const quoComment=document.getElementById('Comment');
		quoComment.focus();
		quoComment.value=quoComment.value+"\n>>`` "+e+"``\n";
		
	}
render() {
	const {profile, article, comment}=this.props;
		
	return (
				<div className="bg-light mt-1">
				<div className="border">			
														<div className="d-flex justify-content-between border-bottom pt-1" style={{background:"gainsboro"}}>
															<div className="d-flex justify-content-start">
																	<img height={25} width={25} src={comment.avatar} alt="profile" className="rounded-circle"/>
																	<h6>{comment.nickname}</h6>
															</div>	
															<div className="d-flex justify-content-end">
																	{profile.sub===comment.sub &&(
																	<div>
																		<button data-toggle="tooltip" data-placement="bottom" title="Delete" className="btn btn-outline-dark btn-sm mx-1" onClick={()=>this.del(article.id, comment.id)}><img src={trash} height={15} width={15} alt="trash"/></button>
																		<button data-toggle="tooltip" data-placement="bottom" title="Edit" className="btn btn-outline-dark btn-sm mx-1" onClick={(e)=>this.toggleModal(comment)}><img src={Pencil} height={15} width={15} alt="pencil" /></button> 
																	</div>)}
																	<div>
																		<button data-toggle="tooltip" data-placement="bottom" title="Quote" className="btn btn-outline-dark btn-sm mx-1" onClick={()=>this.quote(comment.comment)}><img src={Quote} height={15} width={15} alt="quote"/></button>
																		<button data-toggle="tooltip" data-placement="bottom" title="Reply" className="btn btn-outline-dark btn-sm mx-1" onClick={()=>this.reply(comment.nickname)}><img src={Reply} height={15} width={15} alt="reply"/></button>
																	</div>

																	<p className="text-muted"><small>{comment.commentDate}</small></p>
															</div>
														</div>
														<div className="d-flex flex-column">
															<div className="d-flex">
																<p className="ml-1" dangerouslySetInnerHTML={{ __html: comment.comment.replace(/\n/g, '<br>') }}></p>
															</div>
															{((comment.editDate) &&(comment.sub!=="deleted!"))&&(
															<div className="d-flex">
																<p className="text-muted ml-4"><small>Edited:{comment.editDate}</small></p>
															</div>)}
														</div>
													
										<Modal isOpen={this.state.modal} toggle={()=>this.toggleModal(comment)} className={this.props.className}>
											<ModalHeader toggle={()=>this.toggleModal(comment)}>Edit comment</ModalHeader>
											<ModalBody>
												<form onSubmit={(e)=>this.handleCommentSubmit(article.id, comment.id, e)}>
													<label>Comment:</label>
														<textarea className="form-control form-control-lg" type="text" placeholder="Your comment" name="comment" onChange={this.handleCommentChange} defaultValue={comment.comment} required/>
													<div className="d-flex">
														<button className="btn btn-dark btn-lg btn-block" disabled={this.state.btnConfirm}>Confirm</button>
													</div>
												</form>
											</ModalBody>
											<ModalFooter>
												<button className="btn btn-outline-secondary btn-lg btn-block" onClick={()=>this.toggleModal(comment)}>Cancel</button>
											</ModalFooter>
										</Modal>
												</div>				
							
				</div>
    );
  }
}

export default CommentsConstructor;

