import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Following from './components/Following'
import Browse from './components/Browse'
import Channel from './components/Channel'
import Games from './components/Games'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Login from './components/Login'

class App extends Component {

  render() {  
    return (
    <Router>
      <div className="app">
        <div className="nav">
          <Navbar/>
        </div>
        <Sidebar/>
        <Switch>
          <div className="nav-heading">   
          <Route exact path="/main" component={(props) => <Body {...props} />} />   
          <Route exact path="/following" component={Following} />   
          <Route exact path="/browse" component={Browse} />   
          <Route exact path="/games" component={Games} />   
          <Route exact path="/channel" component={Channel} />
          <Route exact path="/login" component={Login} />   
          </div>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default withRouter(App);
