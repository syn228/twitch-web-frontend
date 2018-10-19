import React, { Component } from 'react';
import Searchbar from './Searchbar'
import { withRouter, NavLink } from 'react-router-dom';

class Navbar extends Component { 
  render() {
    return (
      <div>
        <NavLink style={{marginRight: "10px", color: "white", fontWeight: "bold"}} exact to="/following" >Following</NavLink>
        <NavLink style={{marginRight: "10px", color: "white", fontWeight: "bold"}} exact to="/browse">Browse</NavLink>
        <NavLink style={{marginRight: "10px", color: "white", fontWeight: "bold"}} exact to="/store">Store</NavLink>
        <Searchbar/>
      </div>
    )
  }
}
export default Navbar;