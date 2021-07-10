import React, { Component } from 'react'

export default class displayProduct extends Component {
    constructor(props) {
       super(props)

       this.state = {}
   }
//Get all products 
fetch('https://fakestoreapi.com/products');
            .then(resonse=>response.json())
            .then(json=>console.log(json))

// Search the products
fetch('https://fakestoreapi.com/products?sort=desc');
            .then(res=>res.json())
            .then(json=>console.log(json))

// 

   render() {
       return (
         <div className='displayProducts'>
               
         </div>
       )
   }
}   