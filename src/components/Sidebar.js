import React from "react";
import Sidebar from "react-sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <div>
        <h4>Followed Channel</h4>
        <h4>Recommended Channel</h4>
        <h4>Online Friends</h4>
        <h4>Recommended Friends</h4>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        trasitions={true}
        styles={{ sidebar: { background: "white" } }}
      >
        <button className="sidebar-button" onClick={() => this.onSetSidebarOpen(true)}>
          {"<"}
        </button>
      </Sidebar>
    );
  }
}

export default App;