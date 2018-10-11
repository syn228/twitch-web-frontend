import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div class="wrapper">
    <nav id="sidebar">
        <div class="sidebar-header">
            <h4>Followed Channels</h4>
            <p>Admiral Bahroo!</p>
            <a href="#">Show More</a>
        </div>

        <div class="sidebar-header">
        <h4>Recommended Channels</h4>
        <p>Angrypug</p>
            <a href="#">Show More</a>
        </div>


        <h4>Online Friends</h4>
        <h4>Recommended Friends</h4>

       
        

    </nav>
  
</div>
    );
  }
}

export default Sidebar;