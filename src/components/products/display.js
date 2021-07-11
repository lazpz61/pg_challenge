import React, { Component } from 'react'

export default class displayProduct extends Component {
    constructor(props) {
       super(props)

       this.state = {
         productData: []
       }
   }
//Get all products 

ComponentDidMount(){
  fetch('https://fakestoreapi.com/products')
            .then(response=>response.json())
            .then(responseProducts => this.setState({
              productData: [responseProducts]
            }))
            .catch(error => console.log("error bringing in products", error))
}


// // Search the products
// fetch('https://fakestoreapi.com/products?sort=desc');
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// 

   render() {
       return (
         <div className='displayProducts'>
               
         </div>
       )
   }
}   