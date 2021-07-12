//React imports
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// internal imports
import DisplayProducts from "./products/display";

//

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      productData: []
    }

      this.ComponentDidMount = this.ComponentDidMount.bind(this);
  }

  ComponentDidMount(){
    fetch('https://fakestoreapi.com/products')
              .then(response=>response.json())
              .then(responseProducts => this.setState({
                productData: [responseProducts]
              }))
              .catch(error => console.log("error bringing in products", error))
  }

  render() {
    return (
      <div>

        <BrowserRouter>
          <div className='app'>

          
            <h1>Laz's E-Commerce Web App</h1>
            {/* <Switch>
              <Route path="/display" component={DisplayProducts}/>
            </Switch> */}
            {this.state.productData}
            
          </div>

        </BrowserRouter>

      </div>
    );
  }
}
