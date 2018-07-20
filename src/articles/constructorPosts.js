import React, { Component } from 'react';
import firebase from './firebase.js';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Comments from './comments';
import Likes from './likes';
import Pics from './pics/pics';
import Pencil from './pics/pencil.png'
import trash from './pics/trash.png';

export class ConstructorPosts extends Component {
  	constructor(props){
		super(props);
		this.state={
		style: '',
		showBody: false,
		btnIcon: '▼',
		btnShow: false,
		btnPost: true,
		modal: false,
			story:'',
			title:'',
			articles:[],
			imageURL:[],
		comment:'',
		editDate:''
		}
	}
	
	handleTitleChange=(e)=>{
		let val=e.target.value;
		(val.length>0) ? this.setState({btnPost: false}) :this.setState({btnPost: true});		
		if (val.length<255) {
			this.setState({
			[e.target.name]:val,
			}) 
			}
		else {
		alert('Too long title! U have only 255 charaters for this input!')
		}
	}
	
	handleStoryChange=(e)=>{
		let val=e.target.value;
		(val.length>0) ? this.setState({btnPost: false}):this.setState({btnPost: true});
		this.setState({
			[e.target.name]:val,
		});
		
	}
	handleSubmit(itemId, e){
		
		e.preventDefault();
		const itemRef=firebase.database().ref('articles/'+(itemId));
		
		const article= {
			story: this.state.story,
			title:this.state.title,
			edit:this.state.editDate
		}
		itemRef.update(article);
		this.setState({
			story:'',
			title:'',
			editDate:'',
			modal: !this.state.modal
		})
		
	}
	
	removeItem(itemId){
		const itemRef=firebase.database().ref('articles/'+(itemId));
		let confirmation=window.confirm('Are u sure want to delete this post?');
		if (confirmation){
		itemRef.remove();}
	}
	
	toggleModal(a){
    let editDatePost=new Date().toLocaleString();
	this.setState({
      modal: !this.state.modal,
	  title:(this.state.modal!==true)? a.title : '',
	  story:(this.state.modal!==true)? a.story : '',
	  btnPost: true,
	  editDate:editDatePost
	  });
	  
	}
	showArticleBody=()=> {
		this.setState ({showBody: (this.state.showBody===false)? true: false, btnIcon:(this.state.btnIcon==='▲')? '▼': '▲', style:(this.state.showBody===false)?'gray':'',})
	}
	
	mouseEntered=()=> {
		this.setState({btnShow: true})
	}
	
	mouseLeft=()=> {
		this.setState({btnShow: false})
	}
	
	componentDidMount(){
		if (this.props.articleSkeleton.id===this.props.isOpened){
		this.setState({showBody: true, btnIcon:'▲',style:'darkgray'})	
		}
		else{
		this.setState({showBody: false, btnIcon:'▼',style:''})	
		}
		
		
		if (this.props.articleSkeleton.file)
		{	let fileArr=[];
			for(let i=0;i<this.props.articleSkeleton.file.length;i++)
		{		
			firebase.storage().ref('images').child(this.props.articleSkeleton.file[i].toString()).getDownloadURL().then(url => fileArr.push(url));
		}
		this.setState({imageURL:fileArr});
		}
		
	}
	
render() {
	
const{userHasScopes} = this.props.auth;	
const {articleSkeleton}=this.props;
const edited = <p className="d-flex justify-content-end text-muted mt-1"><em>Edited: {articleSkeleton.edit}</em></p>
const articleTitle = <h1 className="rounded ml-1"> {(articleSkeleton.title.length>40 && this.state.showBody===false)? (articleSkeleton.title.slice(0, 40) + '...') : articleSkeleton.title }</h1>
const articleStory=<p className="border-botom ml-1" dangerouslySetInnerHTML={{ __html: articleSkeleton.story.replace(/\n/g, '<br>') }}></p>
const btnHide=<h5 className="text-center mt-2 mr-2">{this.state.btnIcon}</h5>
const imgPost =<div> <Pics imgsrc={this.state.imageURL} /> </div>
const articleBody=<div className="border border-top-0 bg-light rounded">
									{articleStory}
									{articleSkeleton.file ?imgPost:''}
									{articleSkeleton.edit ? edited : ''} 
									{userHasScopes(['write:posts'])&&(
									<div className="d-flex justify-content-end mt-2 pb-1">
										<button className="btn btn-sm btn-outline-dark mr-1" onClick={()=>this.removeItem(articleSkeleton.id)}><img src={trash} alt="remove" height={20} width={20}/>Remove</button>
										<button className="btn btn-sm btn-outline-dark mr-1" onClick={()=>this.toggleModal(articleSkeleton)}><img src={Pencil} alt="edit" height={20} width={20} /> Edit</button>
									<Modal isOpen={this.state.modal} toggle={()=>this.toggleModal(articleSkeleton)} className={this.props.className}>
										<ModalHeader toggle={()=>this.toggleModal(articleSkeleton)}>Edit post</ModalHeader>
										<ModalBody>
											<form id='editForm' onSubmit={(e)=>this.handleSubmit(articleSkeleton.id, e)}>
												<div className="form-group">
													<label>Topic:</label>
													<input  id="editTopic" className="form-control" type="text" placeholder="Title" name="title"  onChange={this.handleTitleChange} defaultValue={articleSkeleton.title} required/>
														
												</div>
												<div className="form-group">
													<label>Story:</label>
													<textarea id="editStory" className="form-control form-control-lg" type="text" placeholder="New story" name="story" onChange={this.handleStoryChange} defaultValue={articleSkeleton.story} required/>
												</div>
												<div className="d-flex justify-content-end">
													<button className="btn btn-dark btn-lg btn-block" disabled={this.state.btnPost}>Post</button>
												</div>
											</form>
										</ModalBody>
										<ModalFooter>
											<button className="btn btn-outline-secondary btn-lg btn-block" onClick={()=>this.toggleModal(articleSkeleton)}>Cancel</button>
										</ModalFooter>
									</Modal>
									</div>
									)}
									<div className="d-flex border-top" style={{background:"LightGray"}}>
										<p className="container text-muted mt-1 w-100">Created: {articleSkeleton.date} </p>
										<Likes article={this.props.articleSkeleton} auth={this.props.auth}/>
									</div>
								<Comments article={this.props.articleSkeleton} auth={this.props.auth}/>
					</div>

return (
	
    <div className="container mt-2 rounded">
	 							<div className="btn-outline-dark d-flex justify-content-between border rounded"
								data-toggle="tooltip" data-placement="top" title="Clik to open/close"
								onClick={this.showArticleBody} onMouseEnter={this.mouseEntered}
								onMouseLeave={this.mouseLeft} style={{backgroundColor:this.state.style}}>
									{articleTitle}	
									{(this.state.btnShow===true)? btnHide : ''}	
								</div>
								{(this.state.showBody===true)? articleBody : ''}
								
	</div>
    );
  }
}

export default ConstructorPosts;
