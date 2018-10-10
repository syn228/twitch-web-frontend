import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Following from './components/Following'
import Browse from './components/Following'
import Store from './components/Following'



class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
      <Navbar/>
        <Route exact path="/following" component={Following} />   
        <Route exact path="/browse" component={Browse} />   
        <Route exact path="/store" component={Store} />   
      </Switch>
    </Router>
    );
  }
}

export default withRouter(App);
