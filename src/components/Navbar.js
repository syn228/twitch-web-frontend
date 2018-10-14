import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class Navbar extends Component { 
  render() {
    return (
      <div>
        <NavLink style={{marginRight: "10px"}} exact to="/following" >Following</NavLink>
        <NavLink style={{marginRight: "10px"}} exact to="/browse">Browse</NavLink>
        <NavLink style={{marginRight: "10px"}} exact to="/store">Store</NavLink>
      </div>
    )
  }
}
export default Navbar;