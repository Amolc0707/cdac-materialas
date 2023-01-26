
import React, { Component } from 'react';


export default class ClassComponent extends React.Component{
render(){
const greeting = "Good Evening";
const names = [
'abc',
'def',
'xyz'
];

const nameAge = [
{
name:'xyz',
age:30
},
{
name:'abc',
age:31
},
{
name:'def',
age:32
}
]
return(
<div className="container">
<h1>Class Component</h1>
<p>{greeting}</p>

<div>
{names.map(name => <p>{name}</p>)}
</div>
<ul>
{
nameAge.map(nameAge =>
<li>{nameAge.name} {nameAge.age}</li>
)
}
</ul>
</div>
)
}
}

