import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          search: '',
        }
      }


onChange = event => {
    this.setState({search: event.target.value})
  }
render() {
    return (
        <div className='search-component'>
               <label htmlFor="search-form">
                  <input 
                       type="text" 
                       name="search-form"
                       className="search-input"
                       placeholder="Search Product..."
                       onChange={this.onChange}
                  />
                  </label>
        </div>
      )
   }
}
