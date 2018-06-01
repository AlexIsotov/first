import React, { Component } from 'react';

export class InputAboutPage extends Component {
  constructor(props){
	  super(props);
	  let name=props.name;
	  let age=props.age;
	  	  
	  this.state={
		  name: name,
		  age: age,
		  nameValid: null,
		  ageValid: null,
		  nameMessage:null,
		  ageMessage:null
	  };
	  
  }
   
  onAgeChange = e=> {
	  let val = e.target.value;
	  val<0? this.setState({age: val, ageValid:false,ageMessage:" Wrong age!!!"}):val<2? this.setState({age: val, ageValid:false,ageMessage:" You're to young to say hi!!!"}):val>110 ? this.setState({age: val, ageValid:false, ageMessage:" Are you zombie ??! "}):this.setState({age: val, ageValid:true, ageMessage:" Your age is OK!"});
  
  }
  onNameChange = e=> {
	  let val=e.target.value;
	  val.length<1?this.setState({name:val, nameValid:false,nameMessage:"Please enter your name !"}):val.length>=2?this.setState({name:val, nameValid:true,nameMessage:"Name is OK !"}):this.setState({name:val, nameValid:false,nameMessage:"Too short name !"}); 
  }
  onclickInfo = e =>{
	  e.preventDefault();
	  (this.state.nameValid ===true && this.state.ageValid ===true) ? alert("Hello to you amigo  " + this.state.name + " " +this.state.age+ " years old"):alert("Check your inputs!");
  }
  render() {
 let nameColor=this.state.nameValid===true?"green":"tomato";
 let ageColor=this.state.ageValid===true?"green":"tomato";
    return (
	<div className="container">
	<form  action="/about" method= "post" onSubmit={this.onclickInfo}>
		<div className="form-row">
			<div className="col">
				<input className="form-control" type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={this.onNameChange} style={{borderColor:nameColor}}/>
			</div>
			<div className="col">
				<input className="form-control" type="number" name="age" placeholder="Enter your age" value={this.state.age} onChange={this.onAgeChange} style={{borderColor:ageColor}}/>
			</div>
		</div>
		<div className="d-flex justify-content-center">
		<button className="btn btn-lg btn-primary mt-1">say HI</button>
		</div>
		<p className="alert alert-warning text-center">{this.state.nameMessage}  {this.state.ageMessage}</p>
		
	</form>
		
</div>
)
  }
}
export default InputAboutPage;