//React imports
import React, { Component } from 'react';


export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }

      this.componentDidMount = this.componentDidMount.bind(this);
      this.renderProducts = this.renderProducts.bind(this);
  }

componentDidMount(){
    fetch('https://fakestoreapi.com/products')
              .then(response=>response.json())
              .then(response=> this.setState({
                products: response
              }))
              .catch(error => console.log("error bringing in products", error))
             
  }
  
  renderProducts(){
    return this.state.products.map(item => {
      return <div> </div>
    })

  }

  render() {
    const { products} = this.state;
    return (
          <div className='app'>
            
            <h1>Laz's E-Commerce Web App</h1>
          
          <ul>
            {products.map(product => (
              <div className="product-display" key={product.id}>
              
              <img src={product.image} />
              {product.title}
              {product.price}
              {product.description}
              </div>
            ))}
          </ul>
           
            
          </div>
    );
  }
}
