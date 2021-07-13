import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
       super(props)

       this.state = {
           search: ''
       };
   }

   render() {
       return (
         <div className='searchBar'>
               <input type="text" />
         </div>
       )
   }
}   