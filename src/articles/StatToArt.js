import React, { Component } from 'react';

export class StatToArt extends Component {
 constructor (props){
	  super(props);
	  
 this.state= {
		  minimized: false,
		}
 }
  
			minimizeClick=(openArticle) => { 											
			
			{/* button chek state used to minimize posts*/}
				this.setState({minimized: this.state.minimized === false ? true : false});
				this.setState({openArticle: openArticle});
				} 
				
render() {
	const {article, isOpen,onButtonClick}=this.props;
	const myArticleBody =(
	<div>
		<div className="container">
		<section>{article.text}</section>
	</div>
		<h6 className="card-subtitle ">creation date: {(new Date(article.date)).toDateString()}</h6>
	</div>
	)

return (
	<div className="card mx-auto">
	
		<div className="card-header">
			<h3>{article.title}</h3>
		</div>

		<div className="card-body" >
			<button type="button" className="btn btn-info btn-sm float-right" onClick={this.minimizeClick}
			data-toggle="tooltip" data-placement="right" title="Click to open/close">
				{(this.state.minimized === false?  'Open':'Minimize' )}
			</button>
				{(this.state.minimized === false?  '' : myArticleBody)}
			 
		</div>
		
	</div>

)	
    
  }
}

export default StatToArt;
