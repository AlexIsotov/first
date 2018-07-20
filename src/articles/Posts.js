import React, { Component } from 'react';
import firebase from './firebase.js';
import ShowPosts from './showPosts';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FileUploader from 'react-firebase-file-uploader';

let fileArr=[];
 
export class Posts extends Component {
  constructor(props){
		super(props);
		this.state={
			modal: false,
			story:'',
			title:'',
			date:'',
			articles:[],
				isUploading: false,
				file: [],
				progress: 0,
			}
	}
	
	handleTitleChange=(e)=>{
		let val=e.target.value;
		
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
		
		this.setState({
			[e.target.name]:val,
			
		});
		
	}
		
	handleUploadStart = () => this.setState({isUploading: true, progress: 0});
	
	handleProgress = (progress) => this.setState({progress});
	
	handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
	}
	
	handleUploadSuccess = (filename) => {
	fileArr.push(filename.toString()); 
	this.setState({file: fileArr, progress: 100, isUploading: false});
	};
	
	handleSubmit=(e)=>{
		e.preventDefault();
		const articlesRef= firebase.database().ref('articles');
		const article= {
			story: this.state.story,
			title:this.state.title,
			date:this.state.date,
			file:this.state.file
		}
		articlesRef.push(article);
		this.setState({
			story:'',
			title:'',
			date:'',
			file:[],
			modal: !this.state.modal
			
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
				title: items[item].title,
				file: items[item].file,
				date: items[item].date,
				edit: items[item].edit,
				comment:  items[item].comment,
				likers: items[item].likers,
				
			});
			
		}
		this.setState({
			articles:newState
		})
	})
	
}
	toggleModal=()=> {
		let datePost=new Date().toLocaleString();
	
    this.setState({
      modal: !this.state.modal,
	  date:datePost,
	  file:[]
    });
	}
	
render() {
const{userHasScopes} = this.props.auth;	
const newPost=<Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
					<ModalHeader className="text-right" toggle={this.toggleModal}>Create new post</ModalHeader>
					<ModalBody>
						<form  onSubmit={this.handleSubmit} >
							<div id="form">
							<div className="form-group">
								<label>Topic:</label>
								<input  id="inputTopic" className="form-control" type="text" placeholder="Title" name="title" onChange={this.handleTitleChange} value={this.state.title} autoComplete="off" required/>
							</div>
							<div className="form-group">
								<label>Story:</label>
								<textarea id="inputStory" className="form-control form-control-lg" type="text" placeholder="New story" name="story" onChange={this.handleStoryChange} value={this.state.story} required/>
							</div>	
							</div>
		<label  className="btn btn-outline-primary btn-lg btn-block">Add images
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          
         <FileUploader
			hidden
            accept="image/*"
            name="file"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
				onUploadStart={this.handleUploadStart}
				onUploadError={this.handleUploadError}
				onUploadSuccess={this.handleUploadSuccess}
				onProgress={this.handleProgress} 
			multiple
		  />
		  </label>
								<button className="btn btn-dark btn-lg btn-block">Post</button>
							</form>
					<p>{(this.state.file.length>0)? ' Added '+this.state.file.length+' file(s)':''}</p>	
					</ModalBody>
					<ModalFooter>
						<button className="btn btn-secondary btn-lg btn-block" onClick={this.toggleModal}>Cancel</button>
					</ModalFooter>
				</Modal>

return (
	
    <div> 
	
	{userHasScopes(['write:posts'])&&(
		<div>
		<div className="d-flex justify-content-end">
			<button className="btn btn-dark mr-2" onClick={this.toggleModal}> New post</button>
		</div>
			{newPost}
		</div>
		)}
		 
	  	<div>
			<ShowPosts articles={this.state.articles} opened={this.state.articles} auth={this.props.auth}/>
		</div>
	  	
	</div>
    );
  }
}

export default Posts;

