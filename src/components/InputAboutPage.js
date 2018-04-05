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
<div className="formAbout">
	<form  onSubmit={this.onclickInfo}>
		<input type="text"placeholder="Enter your name" value={this.state.name} onChange={this.onNameChange} style={{borderColor:nameColor}}/>
		<input type="number" placeholder="Enter your age" value={this.state.age} onChange={this.onAgeChange} style={{borderColor:ageColor}}/>
		<input className="btn btn-primary" type="submit" value="say HI" />
		<p className="alert alert-warning text-center">{this.state.nameMessage}  {this.state.ageMessage}</p>
		
	</form>
		
</div>
)
  }
}
export default InputAboutPage;