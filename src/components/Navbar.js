import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class Navbar extends Component { 
  render() {
    return (
      <div>
        <NavLink exact to="/following" >Following</NavLink>
        <NavLink exact to="/browse">Browse</NavLink>
        <NavLink exact to="/store">Store</NavLink>
      </div>
    )
  }
}
export default Navbar;