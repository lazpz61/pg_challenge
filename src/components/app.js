//React imports
import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }

      this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(res=> this.setState({
                products: res
              }))
              .catch(error => console.log("error bringing in products", error))
  }

  render() {
    return (
          <div className='app'>

            <h1>Laz's E-Commerce Web App</h1>
           
            
          </div>
    );
  }
}
