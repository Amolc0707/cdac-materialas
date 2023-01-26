
import React, {Component} from 'react';

export default class UncontrolledForm extends React.Component{
constructor(props){
super(props);

this.nameInput = React.createRef();
this.passwordInput = React.createRef();
}

submitFormHandler = (event) =>{
event.preventDefault();

alert(this.nameInput.current.value + " " + this.passwordInput.current.value);
}

render(){
return(
<form onSubmit={this.submitFormHandler}>
<div>
Name:<input type="text" name="name"
ref={this.nameInput} />
Password:<input type="password" name="name"
ref={this.passwordInput} />

<input type="submit" value="Submit" />
</div>

</form>
)
}
}

