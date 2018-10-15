import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'

export default props => {
  return (
    <Menu>
      <h4>Followed Channels</h4>
      <NavLink className="menu-item" to="/following">
        Show More
      </NavLink>

      <h4>Recommended Channels</h4>
      <NavLink className="menu-item" to="/">
        Show More
      </NavLink>

      <h4>Online Friends</h4>
      <NavLink className="menu-item" to="/">
        Show More
      </NavLink>

      <h4>Recommended Friends</h4>
    </Menu>
  );
};