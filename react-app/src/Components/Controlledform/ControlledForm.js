
import React, { Component } from 'react';

export default class ControlledForm extends React.Component{
constructor(props) {
super(props);
this.state = {name:'',password:''}
}
 

handleSubmit = (event) =>{
event.preventDefault();
alert(this.state.name + " " + this.state.password);
}

handleInputChange = (event) =>{
this.setState({
name:event.target.value
})
}

handlePasswordChange = (event) =>{
this.setState({
password:event.target.value
})
 
}

render(){
return (
<form onSubmit = {this.handleSubmit}>
<div>
Name:<input type="text" name="name"
value={this.state.name} onChange={this.handleInputChange}/>
 
Password:<input type="password" name="name"
value={this.state.password} onChange={this.handlePasswordChange} />
 
<input type="submit" value="Submit" />
</div>

</form>
);
}
}

