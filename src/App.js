import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Following from './components/Following'
import Browse from './components/Browse'
import Store from './components/Store'
import Sidebar from './components/Sidebar'



class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar/>
        <Sidebar/>
        <Switch>
          <Route exact path="/following" component={Following} />   
          <Route exact path="/browse" component={Browse} />   
          <Route exact path="/store" component={Store} />   
        </Switch>
      </div>
    </Router>
    );
  }
}

export default withRouter(App);
