//React imports
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// internal imports
import DisplayProducts from "./products/display";

//

export default class App extends Component {
  render() {
    return (
      <div>

        <BrowserRouter>
          <div className='app'>

            
            <h1>Laz's E-Commerce Web App</h1>
            <Switch>
              <Route path="/display" component={DisplayProducts}/>
            </Switch>
            
          </div>

        </BrowserRouter>

      </div>
    );
  }
}
