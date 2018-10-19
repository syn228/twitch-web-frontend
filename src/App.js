import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Following from './components/Following'
import Browse from './components/Browse'
import Store from './components/Store'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Searchbar from './components/Searchbar'
import Adapter from './components/Adapter'



class App extends Component {
  state = {
    topStreams: "",
  }

  componentDidMount() {
    Adapter.getStreams().then(r => r.json()).then(res => this.setState({topStreams: res})  )
  }

  render() {  
    console.log(this.state.topStreams.data)  
    return (
    <Router>
      <div className="app">
        <div className="nav">
          <Navbar/>
        </div>
        <Sidebar/>
        <Body topStreams={this.state.topStreams}/>
        <Switch>
          <div className="nav-heading">
          <Route exact path="/following" component={Following} />   
          <Route exact path="/browse" component={Browse} />   
          <Route exact path="/store" component={Store} />   
          </div>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default withRouter(App);
