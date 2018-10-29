import React, { Component } from 'react';
import Searchbar from './Searchbar'
import { withRouter, NavLink } from 'react-router-dom';

class Navbar extends Component { 
  render() {
    return (
      <div className="nav-bar">
        <NavLink style={{marginRight: "10px", color: "white", fontWeight: "bold"}} exact to="/main" >Home</NavLink>
        <NavLink style={{marginRight: "10px", color: "white", fontWeight: "bold"}} exact to="/following" >Following</NavLink>
        <NavLink style={{marginRight: "10px", color: "white", fontWeight: "bold"}} exact to="/browse">Browse</NavLink>
        <NavLink style={{marginRight: "10px", color: "white", fontWeight: "bold"}} exact to="/games">Games</NavLink>
        <Searchbar/>
        <NavLink style={{position: "absolute", color: "white", fontWeight: "bold", marginLeft: "80%"}} exact to="/login">Log-In</NavLink>
      </div>
    )
  }
}
export default Navbar;