import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class Navbar extends Component { 
  handleClick = (event) => {
    switch(event.target.innerText){
      case "Following":
      this.props.history.push("/following")
      break;
      default:
      break;
    }
  }   
  render() {
    return (
      <div>
        <NavLink exact to="/following" onClick={this.handleClick}>Following</NavLink>
        <NavLink exact to="/browse">Browse</NavLink>
        <NavLink exact to="/store">Store</NavLink>
      </div>
    )
  }
}
export default withRouter(Navbar);