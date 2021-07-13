//React imports
import React, { Component } from 'react';

//internal imports 
import SearchBar from './search-bar';


export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }

      this.componentDidMount = this.componentDidMount.bind(this);
      this.renderMainProductsDisplay = this.renderMainProductsDisplay.bind(this);
  }

// This is the fetch call for pulling the API

componentDidMount(){
    fetch('https://fakestoreapi.com/products')
              .then(response=>response.json())
              .then(response=> this.setState({
                products: response
              }))
              .catch(error => console.log("error bringing in products", error))
             
  }
// Function to be able to pull display the products from the fake store api
  renderMainProductsDisplay(){
    return   this.state.products.map(product => (
      <div className="product-display" key={product.id}>
      
      <img src={product.image} />
      {product.title}
      {product.price}
      {product.description}
      </div>
    ))

  }

  render() {
    return (
          <div className='app'>
            
            <h1>Laz's E-Commerce Web App</h1>
            <SearchBar />

            
            <div className="display-flex-container">
                {this.renderMainProductsDisplay()}
            </div>

           
            
          </div>
    );
  }
}
