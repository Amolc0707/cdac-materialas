
import React, {Component} from 'react';
import './Product.css';

const products = [
{
emoji:'☕',
name:'coffee',
price:5
},
{
emoji:'🍨',
name:'ice cream',
price:2.5
},
{
emoji:'🍲',
name:'noodles',
price:7.5
}

]
export default class Product extends React.Component{
state = {
cart:[],
total:0
}

currencyOptions = {
minimumFractionDigits:2,
maximumFractionDigits:2,
}

getTotal = () => {
return this.state.total.toLocaleString(undefined,this.currencyOptions);
}

add = (product) =>{
this.setState(state=>(
{
cart:[...state.cart, product.name],
total: state.total + product.price
}
))
}

remove = (product) => {
this.setState(state =>{
const cart = [...state.cart];
cart.splice(cart.indexOf(product.name));
return({
cart,
total: state.total - product.price
})
})
}

render(){
return(
<div className="wrapper">
<div>Shopping cart: {this.state.cart.length} total items</div>
<div>Total:{this.getTotal()}</div>

<div>
{products.map(product => (
<div key={product.name}>

<div className="product"><span role="img"
aria-label={product.name}>
{product.emoji} {product.price}</span>
</div>
<button onClick={()=>this.add(product)}>Add</button>
<button onClick={()=>this.remove(product)}>Remove</button>
</div>
))}
</div>
</div>

)
}
}

