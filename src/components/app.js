//React imports
import React, { Component } from 'react';

//internal imports 
import Search from './search-bar';


export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: [],
      inputValue: '',
      searchedProducts: '',
      filteredProducts: [],


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
              .catch(error => this.setState({
                isLoading: true
              }))
             
  }

// Function to be able to pull display the products from the fake store api
  renderMainProductsDisplay(){
    const {search} = this.state;

    // if( search !== '' && this.state.products.indexOf( search ) === -1){
    //   return null
    // }
    return  this.state.products.map(product => (
      <div className="product-display" key={product.id}>
      
      <img src={product.image} alt={product.id}/>
      <em>{product.title}</em>
      <strong>{product.price}</strong>
      <span>{product.description}</span>
      </div>
    ))

  }



  render() {
    return (
          <div className='app'>
            
            <h1>Laz's E-Commerce Web App</h1>
            <Search />

            
            <div className="display-flex-container">
                {this.renderMainProductsDisplay()}
            </div>

           
            
          </div>
    );
  }
}

// ReacDom.render(
//   <Search />,
//   document.getElementById('root')
// );
